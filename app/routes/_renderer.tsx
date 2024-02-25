import { Style } from "hono/css";
import { type FC } from "hono/jsx";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import { LINK } from "../constants";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <Script src="/app/client.ts" async />
        <Style />
        {import.meta.env.PROD ? (
          <link href="static/assets/style.css" rel="stylesheet" />
        ) : (
          <link href="/app/style.css" rel="stylesheet" />
        )}
      </head>
      <body>
        <Header />
        <main className="max-w-[900px] mx-auto">{children}</main>
      </body>
    </html>
  );
});

const Header: FC = () => {
  return (
    <div className="mt-3 bg-black">
      <div className="max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-6">
        <a href={"/"} className="text-white text-base font-bold">
          Yuto Blog
        </a>
        <div className="flex items-center gap-2">
          <a href={LINK.X} target={"_blank"} rel={"noreferrer"} className="p-2">
            <img
              src="/app/images/twitter-alt.svg"
              alt="x-icon"
              className="w-7 h-7"
            />
          </a>
          <a
            href={LINK.GITHUB}
            target={"_blank"}
            rel="noreferrer"
            className="p-2"
          >
            <img
              src="/app/images/github.svg"
              alt="github-icon"
              className="w-7 h-7 text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
