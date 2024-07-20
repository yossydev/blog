import { type FC, Fragment } from "hono/jsx";
import { Heading } from "../components/Heading";
import { rssClient } from "../libs/rss/rss";

export default function Top() {
  return (
    <>
      <Heading title="Hi! I'm Yuto" />
      <div class="mt-5">
        <p class="font-medium">
          都内在住の技術好きなエンジニアです。Rust / OSS / Developer
          Experienceの向上に興味があります。
          <span class="ml-1">
            <a
              href="/profile"
              class="underline underline-offset-3 text-blue-700"
            >
              About Me →
            </a>
          </span>
        </p>
      </div>
      <Posts />
    </>
  );
}

type PostEntry = {
  [key: string]: {
    frontmatter: {
      title: string;
      date: string;
    };
  };
};

const FIRST_BLOG_POST_YEAR = 2021;

const Posts: FC = () => {
  const posts = import.meta.glob<{
    frontmatter: { title: string; date: string; published: boolean };
  }>("./posts/*.mdx", { eager: true });
  const entries = Object.entries(posts).filter(
    ([_, module]) => module.frontmatter.published,
  );

  const sortedEntries = entries
    .sort((a, b) => {
      const dateA = new Date(a[1].frontmatter.date).getTime();
      const dateB = new Date(b[1].frontmatter.date).getTime();
      return dateA - dateB;
    })
    .reverse();
  const sortedPosts = sortedEntries.reduce<PostEntry>((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  const yearlyBlogs = () => {
    const blogData = [];
    const thisYear = new Date().getFullYear();
    for (let year = FIRST_BLOG_POST_YEAR; year <= thisYear; year++) {
      const arrBlog = Object.entries(sortedPosts)
        .filter(([_, post]) => {
          const date = "frontmatter" in post ? post.frontmatter.date : "";
          const postYear = new Date(date).getFullYear();
          return postYear === year;
        })
        .map(([id, post]) => ({
          id,
          date: "frontmatter" in post ? post.frontmatter.date : "",
          title: "frontmatter" in post ? post.frontmatter.title : "",
          link: id.replace(/\.mdx$/, "").replace(/\./g, ""),
          postedIn: "blog",
        }));
      const zennPosts = rssClient
        .find()
        .filter((post) => {
          const postYear = new Date(post.date).getFullYear();
          return postYear === year;
        })
        .map((post) => ({
          id: post.id,
          date: post.date,
          title: post.title,
          link: post.link,
          postedIn: "zenn",
        }));
      const posts = [...arrBlog, ...zennPosts];

      blogData.push({
        year: year,
        posts: posts.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        }),
      });
    }
    return blogData;
  };

  return (
    <div class="mt-16">
      <Heading title="Posts" />
      <ul class="mt-10">
        {yearlyBlogs()
          .reverse()
          .map((res, index) => {
            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: enable index
              <Fragment key={`${index}`}>
                <h3 class="text-xl my-5 font-bold">{res.year}</h3>
                {res.posts.map(({ id, title, date, link }) => {
                  return (
                    <li key={id} class="text-lg mt-2 md:mt-1">
                      <time class="tabular-nums tnum date pr-3">{date}</time>
                      <br class="block md:hidden" />
                      <a class="text-blue-600 underline" href={link}>
                        {title}
                      </a>

                      {link.includes("zenn") && (
                        <img
                          src="/static/zenn-logo.png"
                          alt="zenn-logo"
                          class="ml-2 w-5 h-5 inline"
                        />
                      )}

                      {link.includes("youtube") && (
                        <img
                          src="/static/Youtube_logo.png"
                          alt="Youtube_logo"
                          class="ml-2 w-6 h-4 inline"
                        />
                      )}
                    </li>
                  );
                })}
              </Fragment>
            );
          })}
      </ul>
    </div>
  );
};
