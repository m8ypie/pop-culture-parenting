// import re from "simple-xml-to-json";
import xml2js from "xml2js";
import { saveEpisode, connect } from "$lib/db";

var parser = new xml2js.Parser(/* options */);

export default async ({ podcasts }: PodcastList) => {
  await connect();
  for (const podcast of podcasts) {
    await saveEpisode(podcast);
  }
};
