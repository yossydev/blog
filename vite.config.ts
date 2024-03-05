import pages from "@hono/vite-cloudflare-pages";
import honox from "honox/vite";
import client from "honox/vite/client";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import ssg from "@hono/vite-ssg";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client()],
      build: {
        rollupOptions: {
          input: ["/app/style.css"],
          output: {
            assetFileNames: "static/assets/[name].[ext]",
          },
        },
      },
    };
  }
  return {
    plugins: [
      honox(),
      pages(),
      mdx({
        jsxImportSource: "hono/jsx",
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
      ssg({ entry }),
    ],
    build: {
      outDir: "public",
    },
  };
});
