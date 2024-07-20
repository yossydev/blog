import zennRss from "./data.json";
import speakerdeckRss from "./speakerdeck.json";
import youtubeRss from "./youtube.json";

function formatDate(utcDate: string) {
  const date = new Date(utcDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}

export const rssClient = {
  find() {
    return zennRss.map((item) => ({
      id: item.guid,
      title: item.title,
      date: formatDate(item.isoDate),
      link: item.guid,
    }));
  },

  findYoutube() {
    return youtubeRss.map((item) => ({
      id: item.id,
      title: item.title,
      date: formatDate(item.isoDate),
      link: item.link,
    }));
  },

  findSpeakerdeck() {
    return speakerdeckRss.map((item) => ({
      id: item.guid,
      title: item.title,
      date: formatDate(item.isoDate),
      link: item.link,
    }));
  },
};
