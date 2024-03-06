import { jsxRenderer } from "hono/jsx-renderer";
import LikeButton from "../../islands/Like";
import Share from "../../islands/share";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const _title = `${frontmatter?.title} | yossy.dev`;
  return (
    <Layout title={_title} description={frontmatter?.description}>
      <div class="markdown">{children}</div>
      <LikeButton />
      <Share title={_title} />
    </Layout>
  );
});
