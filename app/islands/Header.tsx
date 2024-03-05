import { type FC } from "hono/jsx";
import { LINK } from "../constants";

export const Header: FC = () => {
  return (
    <header class="mt-3 bg-black">
      <div class="max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-6">
        <a href="/" class="text-white text-base font-bold">
          Yuto Blog
        </a>
        <div class="flex items-center gap-2">
          <a href={LINK.X} target={"_blank"} rel={"noreferrer"} class="p-2">
            <img src="/static/twitter-alt.svg" alt="x-icon" class="w-7 h-7" />
          </a>
          <a href={LINK.GITHUB} target={"_blank"} rel="noreferrer" class="p-2">
            <img
              src="/static/github.svg"
              alt="github-icon"
              class="w-7 h-7 text-white"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
