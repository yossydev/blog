import { writeFileSync } from "node:fs";
import Parser from "rss-parser";
const parser = new Parser();

(async () => {
  let jsonFeed = {};
  const [feed1, feed2, feed3] = await Promise.all([
    parser.parseURL("https://zenn.dev/yuto76/feed"),
    parser.parseURL(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCu6ckjaLjqCKY-c01fEqUqw",
    ),
    parser.parseURL("https://speakerdeck.com/yossydev.rss"),
  ]);
  const items = feed1.items.map((data) => {
    return data;
  });
  jsonFeed = items;
  writeFileSync("app/libs/rss/data.json", JSON.stringify(jsonFeed));

  const items2 = feed2.items.map((data) => {
    return data;
  });
  jsonFeed = items2;
  writeFileSync("app/libs/rss/youtube.json", JSON.stringify(jsonFeed));

  const items3 = feed3.items.map((data) => {
    return data;
  });
  jsonFeed = items3;
  writeFileSync("app/libs/rss/speakerdeck.json", JSON.stringify(jsonFeed));
})();
