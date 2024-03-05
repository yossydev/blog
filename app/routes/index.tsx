import { FC } from "hono/jsx";
import { createRoute } from "honox/factory";

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div>
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

      <Post />
    </div>,
    { title: name },
  );
});

type PostEntry = {
  [key: string]: {
    frontmatter: {
      title: string;
      date: string;
    };
  };
};

const FIRST_BLOG_POST_YEAR = 2021;

const Post: FC = () => {
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
        // 日付文字列からDateオブジェクトを作成
        const postYear = new Date(module.frontmatter.date).getFullYear();
        // 投稿の年がループ中の年と一致するかチェック
        return postYear === year;
      });
      // 年ごとの投稿データを配列に追加
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
              <h2 class="text-2xl my-5 font-bold">{res.year}</h2>
              {res.posts.map(([id, module]) => {
                return (
                  <li class="text-lg">
                    <span class="tabular-nums tnum">
                      {module.frontmatter.date}:{" "}
                    </span>
                    <a
                      class="text-blue-600"
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

const Heading: FC<{ title: string }> = ({ title }) => {
  return (
    <div class="border-b border-black mt-10">
      <h1 class="text-2xl font-semibold pb-1">{title}</h1>
    </div>
  );
};
