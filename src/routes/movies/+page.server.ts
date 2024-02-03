// import re from "simple-xml-to-json";
import xml2js from "xml2js";
import fs from "fs";
import collator from "../../lambda/collator";
import { getMovieGuess } from "$lib/services/imdb";

var parser = new xml2js.Parser(/* options */);

export async function load({ params }): Promise<undefined> {
  await getMovieGuess("potentialTitle");
}
