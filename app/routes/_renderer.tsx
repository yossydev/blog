import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import { LINK } from "../constants";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {<title>{title ?? "yossy.dev"}</title>}
        <Script src="/app/client.ts" async />
        <Style />
        {import.meta.env.PROD ? (
          <link href="/static/assets/style.css" rel="stylesheet" />
        ) : (
          <link href="/app/style.css" rel="stylesheet" />
        )}
      </head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js" />
      <script>hljs.highlightAll();</script>
      <body>
        <header class="mt-3 bg-black">
          <div class="max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-6">
            <a href="/" class="text-white text-base font-bold">
              Yuto Blog
            </a>
            <div class="flex items-center gap-2">
              <a href={LINK.X} target={"_blank"} rel={"noreferrer"} class="p-2">
                <img
                  src="/static/twitter-alt.svg"
                  alt="x-icon"
                  class="w-7 h-7"
                />
              </a>
              <a
                href={LINK.GITHUB}
                target={"_blank"}
                rel="noreferrer"
                class="p-2"
              >
                <img
                  src="/static/github.svg"
                  alt="github-icon"
                  class="w-7 h-7 text-white"
                />
              </a>
            </div>
          </div>
        </header>
        <main className="max-w-[900px] mx-auto">{children}</main>
        <footer>
          <p>&copy; 2024 yossy blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
});
