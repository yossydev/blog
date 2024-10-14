import { jsxRenderer } from "hono/jsx-renderer";
import LikeButton from "../../islands/LikeButton";
import SnsButton from "../../islands/SnsButton";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const _title = `${frontmatter?.title} | yossy.dev`;
  return (
    <Layout title={_title} description={frontmatter?.description}>
      <div class="markdown">
        <h1>{frontmatter?.title}</h1>
        <dl class="flex items-center gap-3">
          <div class="flex items-center gap-1">
            <dt>publishedAt: </dt>
            <dd>{frontmatter?.date}</dd>
          </div>
          <div class="flex items-center gap-1">
            <dt>updatedAt: </dt>
            <dd>{frontmatter?.updatedAt}</dd>
          </div>
        </dl>
        {children}
      </div>
      <LikeButton />
      <SnsButton title={_title} path={frontmatter?.path ?? ""} />
    </Layout>
  );
});
