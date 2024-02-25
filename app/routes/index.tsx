import { FC } from "hono/jsx";
import { createRoute } from "honox/factory";
import Counter from "../islands/counter";

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div>
      <Heading title="Hi! I'm Yuto" />
      <div class="mt-5">
        <p class="font-medium">
          都内在住の22歳のエンジニアです。Webパフォーマンス / Developer
          Experienceの向上に興味があります。
          <span class="ml-1">
            <a
              href="/profile"
              class="underline underline-offset-3 text-blue-700"
            >
              Read more →
            </a>
          </span>
        </p>
      </div>
      <Heading title="Posts" />
    </div>,
    { title: name },
  );
});

const Heading: FC<{ title: string }> = ({ title }) => {
  return (
    <div class="border-b border-black">
      <h1 class="text-2xl font-semibold pb-1 mt-10">{title}</h1>
    </div>
  );
};
