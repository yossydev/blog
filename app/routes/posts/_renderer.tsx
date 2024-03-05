import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  return (
    <Layout
      title={`${frontmatter?.title} | yossy.dev`}
      description={frontmatter?.description}
    >
      <div class="markdown">{children}</div>
    </Layout>
  );
});
