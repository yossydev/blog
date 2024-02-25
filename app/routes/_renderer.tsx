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
        <title>{title}</title>
        <Script src="/app/client.ts" async />
        <Style />
        {import.meta.env.PROD ? (
          <link href="static/assets/style.css" rel="stylesheet" />
        ) : (
          <link href="/app/index.css" rel="stylesheet" />
        )}
      </head>
      <body>
        <div className="">
          <div className="">
            <main className="">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
});
