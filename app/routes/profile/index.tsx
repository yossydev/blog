import type { FC } from "hono/jsx";
import { createRoute } from "honox/factory";
import { Heading } from "../../components/Heading";
import { LINK } from "../../constants";
import { getAge } from "../../libs/date";

const SnsList: {
  id: number;
  title: string;
  href: string;
}[] = [
  {
    id: 1,
    title: "X",
    href: LINK.X,
  },
  {
    id: 2,
    title: "BlueSky",
    href: LINK.BLUESKY,
  },
  {
    id: 3,
    title: "GitHub",
    href: LINK.GITHUB,
  },
  {
    id: 4,
    title: "LinkedIn",
    href: LINK.LINKEDIN,
  },
  {
    id: 6,
    title: "Email",
    href: LINK.EMAIL,
  },
  {
    id: 7,
    title: "Zenn",
    href: LINK.ZENN,
  },
  {
    id: 8,
    title: "Youtube",
    href: LINK.YOUTUBE,
  },
];

const Text: FC<{ text: string }> = ({ text }) => {
  return <p class="text-lg font-medium mt-6">{text}</p>;
};

export default createRoute((c) => {
  return c.render(
    <>
      <Heading title="About Me" />
      <Text
        text={`${getAge()}歳のフロントエンドエンジニアとして働いているユウトです。出身は日本です。🇯🇵🏯`}
      />
      <Text text="TypeScriptを主に扱っており、最近ではパフォーマンス改善 / Rust / Webブラウザ / Developer Experience / OSS開発に興味があります。" />
      <Text text="2022年からフルタイムでエンジニアとして働き始め、スピード感のある開発をしていく中で、フロントエンドとバックエンド両方の経験をさせていただけたのはとてもいい経験でした。そして2023年、新しい会社にジョインし、Webフロントエンド領域の様々なことに挑戦し、開発者としてレベルアップすることに注力しています。" />
      <Text text="空いた時間で、技術のキャッチアップをし、それを実際に自分の手で動かしてみたりすること。理解が足りない部分や、新しく学んだことを記事にすることも好きです。あとは勉強会に行って発表したりすることも好きです。" />

      <Heading title="Sponsor" />
      <Text text="GitHub Sponsorで応援していただけるとモチベーションにつながります🔥" />
      <iframe
        src="https://github.com/sponsors/yossydev/card"
        title="Sponsor yossydev"
        class="md:w-[600px] w-full md:h-auto h-40"
      />

      <ul class="text-lg mt-6 pt-6 border-t border-black">
        {SnsList.map(({ id, title, href }) => (
          <li key={id} class="flex items-center py-1">
            <div class="w-2 h-2 rounded bg-black mr-2" />
            <a
              href={href}
              class="underline-offset-2 underline mr-1 text-blue-600"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </>,
    { title: "Profile | yossy.dev" },
  );
});
