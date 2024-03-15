import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { LINK } from "../constants";
import { Script } from "../libs/honox";

export default jsxRenderer(({ children, title, description }) => {
  const _title = title ?? "yossy.dev";
  const _description = description ?? "yossydev's personal blog";
  const _image = "/static/smile.png";

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{_title}</title>
        <link rel="icon" href={_image} />
        <meta property="og:title" content={_title} />
        <meta property="og:description" content={_description} />
        <meta property="og:image" content={`https://yossy.dev${_image}`} />
        <meta name="twitter:site" content="@yossydev" />
        <meta name="twitter:image" content={`https://yossy.dev${_image}`} />
        <meta name="twitter:card" content="summary" />
        <Script src="/app/client.ts" />
        <Style />
        {import.meta.env.PROD ? (
          <link href="/static/assets/style.css" rel="stylesheet" />
        ) : (
          <link href="/app/style.css" rel="stylesheet" />
        )}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js" />
        <script>hljs.highlightAll();</script>
      </head>
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
        <main class="w-full px-4 lg:max-w-4xl lg:px-0 mx-auto">{children}</main>
        <footer class="mt-10 text-center py-4 border-t border-black">
          <p>&copy; 2024 yossy blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
});
