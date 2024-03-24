import { jsxRenderer } from "hono/jsx-renderer";
import LikeButton from "../../islands/LikeButton";
import SnsButton from "../../islands/SnsButton";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const _title = `${frontmatter?.title} | yossy.dev`;
  return (
    <Layout title={_title} description={frontmatter?.description}>
      <div class="markdown">
        <h1>{frontmatter?.title}</h1>
        {children}
      </div>
      <LikeButton />
      <SnsButton title={_title} />
    </Layout>
  );
});
