import {} from "hono";

type Head = {
  title?: string;
};

declare module "hono" {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      head?: Head & { frontmatter?: Head },
    ): Response | Promise<Response>;
  }
}
