import {} from "hono";

export type Head = {
  title?: string;
  description?: string;
  date?: string;
  updatedAt?: string;
  path?: string;
};

declare module "hono" {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      head?: Head & { frontmatter?: Head; description?: string },
    ): Response | Promise<Response>;
  }
}
