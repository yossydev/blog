import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, Layout }) => {
  return (
    <Layout>
      <div class="markdown">{children}</div>
    </Layout>
  );
});
