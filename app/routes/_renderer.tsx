import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import { LINK } from "../constants";

export default jsxRenderer(({ children, title, description }) => {
  const _title = title ?? "yossy.dev";
  const _description = description ?? "yossydev's personal blog";
  const _image = "/static/profile-image.png";

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{_title}</title>
        <meta property="og:title" content={_title} />
        <meta property="og:description" content={_description} />
        <meta property="og:image" content={_image} />
        <meta name="twitter:site" content="@yossydev" />
        <meta name="twitter:image" content={_image} />
        <meta name="twitter:card" content="summary_large_image" />
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

      <body class="main-container">
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
        <main class="max-w-[900px] mx-auto">{children}</main>
        <footer class="mt-10 text-center py-4 border-t border-black">
          <p>&copy; 2024 yossy blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
});
