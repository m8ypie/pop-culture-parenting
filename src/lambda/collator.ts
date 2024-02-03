// import re from "simple-xml-to-json";
import type { Podcast, PodcastList, SimpleCastFeed, Test } from "../routes/episodes/types";
import xml2js from "xml2js";
import fs from "fs";
import { saveEpisode, connect } from "$lib/components/db";

var parser = new xml2js.Parser(/* options */);

export default async ({ podcasts }: PodcastList) => {
  await connect();
  for (const podcast of podcasts) {
    await saveEpisode(podcast);
  }
};
