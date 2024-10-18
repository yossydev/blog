import type { FC } from "hono/jsx";
import { createRoute } from "honox/factory";
import { Heading } from "../../components/Heading";
import { LINK } from "../../constants";

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
  {
    id: 9,
    title: "Speakerdeck",
    href: LINK.SPEAKERDECK,
  },
];

const Text: FC<{ text: string }> = ({ text }) => {
  return <p class="text-lg font-medium mt-6">{text}</p>;
};

export default createRoute((c) => {
  return c.render(
    <>
      <Heading title="About Me" />
      <Text text="都内在住の技術好きなエンジニアです。出身は日本です。TypeScriptを主に扱っており、最近ではRust / Developer Experience / OSS開発に興味があります。" />
      <br />
      自分のアウトプットに関しては、
      <a href={"/"} class="underline-offset-2 underline mr-1 text-blue-600">
        Blog
      </a>
      <a
        href={"/slides"}
        class="underline-offset-2 underline mr-1 text-blue-600"
      >
        Slides
      </a>
      <a
        href={"/youtube"}
        class="underline-offset-2 underline mr-1 text-blue-600"
      >
        Youtube
      </a>
      <a
        href={LINK.GITHUB}
        class="underline-offset-2 underline mr-1 text-blue-600"
      >
        GitHub
      </a>
      でチェックできます。
      <Heading title="Sponsor" />
      <Text text="GitHub Sponcerで応援してくださる方を募集しています🙏" />
      <br />
      <iframe
        src="https://github.com/sponsors/yossydev/card"
        title="Sponsor yossydev"
        class="md:w-[600px] w-full md:h-auto h-40"
      />
      <Heading title="Contact" />
      <Text
        text={`お仕事や登壇のご依頼などはXのDMもしくは${LINK.EMAIL}までご連絡ください。`}
      />
      <br />
      <Heading title="Link" />
      <ul class="text-lg mt-6">
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
