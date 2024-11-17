import { useState, type FC } from "hono/jsx";

type SupportedTranslatorAPI =
  | "en"
  | "zn"
  | "ja"
  | "pt"
  | "ru"
  | "es"
  | "tr"
  | "hi"
  | "vi"
  | "bn";

const SELECT_OPTIONS: SupportedTranslatorAPI[] = [
  "ja",
  "en",
  "zn",
  "pt",
  "ru",
  "es",
  "tr",
  "hi",
  "vi",
  "bn",
];

type Props = {
  content: string;
};

const TranslatorButton: FC<Props> = ({ content }) => {
  const [value, setValue] = useState<SupportedTranslatorAPI>("ja");

  // biome-ignore lint: lint/suspicious/noExplicitAny
  const handleSelectChange = async (e: any) => {
    setValue(e.target.value);
    if (
      "translation" in self &&
      // biome-ignore lint: lint/suspicious/noExplicitAny
      "createTranslator" in (self.translation as any)
    ) {
      // biome-ignore lint: lint/suspicious/noExplicitAny
      const translator = await (self.translation as any).createTranslator({
        sourceLanguage: value,
        targetLanguage: e.target.value,
      });
      await translator.translate(content);
    } else {
      window.alert("The Translator API is not supported");
    }
  };

  return (
    <>
      <label for="pet-select">translate to: </label>
      <select
        name="pets"
        id="pet-select"
        onChange={handleSelectChange}
        value={value}
        class="cursor-pointer"
      >
        {SELECT_OPTIONS.map((value) => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default TranslatorButton;
