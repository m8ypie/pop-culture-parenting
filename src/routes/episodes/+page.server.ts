// import re from "simple-xml-to-json";
import type { Podcast, PodcastList, SimpleCastFeed, Test } from "./types";
import xml2js from "xml2js";
import fs from "fs";

var parser = new xml2js.Parser(/* options */);

export async function load({ params }): Promise<PodcastList> {
  const res = await fetch("https://feeds.simplecast.com/_7lcF_6g");

  const simpleCastFeed = (await parser.parseStringPromise(await res.text())) as SimpleCastFeed;
  // fs.writeFileSync("re.json", JSON.stringify(json));

  return {
    podcasts: simpleCastFeed.rss.channel.flatMap((channel) =>
      channel.item.map((item) => ({
        episodeNumber: Number(item["itunes:episode"] || [][0]),
        episodeName: item.title[0],
        description: item.description[0],
        thumbnail:
          (item["itunes:image"] || [])[0]?.$?.href ||
          "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/55ec45e4-a087-4e0f-88e9-9995d4374aab/3000x3000/94148116-7eb9-4601-b7b6-4dbfe58a76cb-2.jpg?aid=rss_feed"
      }))
    )
  };
}
