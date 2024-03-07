import { FC } from "hono/jsx";
import { Heading } from "../components/Heading";

export default function Top() {
  return (
    <>
      <Heading title="Hi! I'm Yuto" />
      <div class="mt-5">
        <p class="font-medium">
          都内在住の22歳のエンジニアです。Webパフォーマンス / Developer
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
      const arrBlog = Object.entries(sortedPosts).filter(([_, module]) => {
        const postYear = new Date(module.frontmatter.date).getFullYear();
        return postYear === year;
      });
      blogData.push({
        year: year,
        posts: arrBlog,
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
          .map((res) => (
            <>
              <h3 class="text-xl my-5 font-bold">{res.year}</h3>
              {res.posts.map(([id, module]) => {
                return (
                  <li class="text-lg mt-2 md:mt-1">
                    <span class="tabular-nums tnum">
                      {module.frontmatter.date}:{" "}
                    </span>
                    <br class="block md:hidden" />
                    <a
                      class="text-blue-600 underline"
                      href={`${id.replace(/\.mdx$/, "")}`}
                    >
                      {module.frontmatter.title}
                    </a>
                  </li>
                );
              })}
            </>
          ))}
      </ul>
    </div>
  );
};
