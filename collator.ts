// // import re from "simple-xml-to-json";
// import xml2js from "xml2js";
// import fs from "fs";
// import collator from "./website/src/lambda/collator";
// import { getMovieGuess } from "$lib/services/imdb";

// var parser = new xml2js.Parser(/* options */);

// export async function load({ params }): Promise<PodcastList> {
//   // await collator();
//   const res = await fetch("https://feeds.simplecast.com/_7lcF_6g");

//   const simpleCastFeed = (await parser.parseStringPromise(await res.text())) as SimpleCastFeed;
//   // fs.writeFileSync(
//   //   "re2.json",
//   //   JSON.stringify([
//   //     ...new Set(
//   //       simpleCastFeed.rss.channel
//   //         .flatMap((channel) => {
//   //           return channel.item.map((item, i) => {
//   //             // if (i % 2 === 0) {
//   //             //              return (item.title[0].split(" + ")[0] || item.title[0].split(" & ")[0].split(": ")[1])?.split(", (")[0];
//   //             return (item.title[0].split(" + ")[0] || item.title[0].split(" & ")[0])
//   //               .split(": ")[1]
//   //               ?.split(", (")[0]
//   //               ?.split("(")[0];
//   //             // }
//   //           });
//   //         })
//   //         .filter((item) => item)
//   //     )
//   //   ])
//   // );

//   // fs.writeFileSync("titles.json");

//   const result = {
//     podcasts: simpleCastFeed.rss.channel.flatMap((channel) =>
//       channel.item
//         .map((item) => ({
//           episodeNumber: Number(item["itunes:episode"] || [][0]),
//           episodeName: item.title[0],
//           description: item.description[0],
//           spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
//           apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
//           google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
//           simpleCast: item.link[0]!,
//           thumbnail:
//             (item["itunes:image"] || [])[0]?.$?.href ||
//             "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/55ec45e4-a087-4e0f-88e9-9995d4374aab/3000x3000/94148116-7eb9-4601-b7b6-4dbfe58a76cb-2.jpg?aid=rss_feed"
//         }))
//         .filter(({ episodeName }) => episodeName !== "Pop Culture Parenting Trailer")
//     )
//   };

//   const populatedPodcastList: Podcast[] = [];

//   for (const unpopulatedPodcast of result.podcasts.reverse()) {
//     const potentialTitles = getPotentialTitles(unpopulatedPodcast.episodeName);
//     let imdbResult:
//       | {
//           title: string;
//           imdbId: number;
//         }
//       | undefined;
//     for (const potentialTitle of potentialTitles) {
//       if (!imdbResult) {
//         imdbResult = await getMovieGuess(potentialTitle);
//       }
//     }
//     const previousPodcast = populatedPodcastList[populatedPodcastList.length - 1];
//     const imdbFields = imdbResult || { title: previousPodcast.movieTitle, imdbId: previousPodcast.imdbId };
//     if (imdbFields) {
//       populatedPodcastList.push({
//         ...unpopulatedPodcast,
//         movieTitle: imdbFields.title,
//         imdbId: imdbFields.imdbId
//       });
//     } else {
//       console.log("part 2? ", unpopulatedPodcast.episodeName);
//     }
//   }
//   fs.writeFileSync("podcasts.json", JSON.stringify({ podcasts: populatedPodcastList }));
//   // await collator({ podcasts: populatedPodcastList });
//   return { podcasts: populatedPodcastList };
// }

// const getPotentialTitles = (podcastTitle: string) => {
//   const withoutEpisodeNumberFlag = podcastTitle
//     .replace(/(Ep)? *\d{3}\:? /gm, "")
//     .replace(/(\(\d{4}\))/gm, "")
//     //neverending story misspelt
//     .replace("Never Ending Story", "Neverending Story")
//     //many christmas vacations... haven't listened to the ep but imagine its national lampoon...
//     .replace("Christmas Vacation", "National Lampoon's Christmas Vacation");

//   if (withoutEpisodeNumberFlag.endsWith("(part 2)") || withoutEpisodeNumberFlag.endsWith("part 2")) {
//     return [];
//   }
//   //sometimes topic + movie/movie + topic
//   if (withoutEpisodeNumberFlag.includes(" + ")) {
//     return withoutEpisodeNumberFlag.split(" + ").map((s) => s.trim());
//     //sometimes topic & movie / movie & topic
//     // SOMETIMES & AND "and" DO AN EPISODE ON BEING CONSISTENT WITH TITLES
//   } else if (withoutEpisodeNumberFlag.includes(" & ") && !withoutEpisodeNumberFlag.includes(" and ")) {
//     return withoutEpisodeNumberFlag.split(" & ").map((s) => s.trim());
//     // & and "and" ? assume & is part of movie title and split at and
//   } else if (withoutEpisodeNumberFlag.includes(" & ") && withoutEpisodeNumberFlag.includes(" and ")) {
//     return withoutEpisodeNumberFlag.split(" and ").map((s) => s.trim());
//   } else {
//     // who knows at this point, just pray?
//     return [withoutEpisodeNumberFlag].map((s) => s.trim());
//   }
// };
