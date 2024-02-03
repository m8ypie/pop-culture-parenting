// import re from "simple-xml-to-json";
import xml2js from "xml2js";

var parser = new xml2js.Parser(/* options */);

export async function load({ params }): Promise<PodcastList> {
  // await collator();
  const res = await fetch("https://feeds.simplecast.com/_7lcF_6g");

  const simpleCastFeed = (await parser.parseStringPromise(await res.text())) as SimpleCastFeed;
  // fs.writeFileSync(
  //   "re2.json",
  //   JSON.stringify([
  //     ...new Set(
  //       simpleCastFeed.rss.channel
  //         .flatMap((channel) => {
  //           return channel.item.map((item, i) => {
  //             // if (i % 2 === 0) {
  //             //              return (item.title[0].split(" + ")[0] || item.title[0].split(" & ")[0].split(": ")[1])?.split(", (")[0];
  //             return (item.title[0].split(" + ")[0] || item.title[0].split(" & ")[0])
  //               .split(": ")[1]
  //               ?.split(", (")[0]
  //               ?.split("(")[0];
  //             // }
  //           });
  //         })
  //         .filter((item) => item)
  //     )
  //   ])
  // );

  const result = {
    podcasts: simpleCastFeed.rss.channel.flatMap((channel) =>
      channel.item.map((item) => ({
        episodeNumber: Number(item["itunes:episode"] || [][0]),
        episodeName: item.title[0],
        description: item.description[0],
        spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
        apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
        google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
        simpleCast: item.link[0]!,
        thumbnail:
          (item["itunes:image"] || [])[0]?.$?.href ||
          "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/55ec45e4-a087-4e0f-88e9-9995d4374aab/3000x3000/94148116-7eb9-4601-b7b6-4dbfe58a76cb-2.jpg?aid=rss_feed"
      }))
    )
  };

  // await collator(result);
  return result;
}
