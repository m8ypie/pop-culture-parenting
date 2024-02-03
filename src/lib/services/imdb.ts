import { IMDB_API_KEY } from "$env/static/private";
import "string_score";
const imdbUriPrefix = "https://api.themoviedb.org/3/";
const res = await fetch("https://feeds.simplecast.com/_7lcF_6g");
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${IMDB_API_KEY}`
  }
};

// const simpleCastFeed = (await parser.parseStringPromise(await res.text())) as SimpleCastFeed;

export async function getMovieGuess(subPodcastTitle: string): Promise<{ title: string; imdbId: number } | undefined> {
  const endpoint = new URL("search/movie", imdbUriPrefix);
  endpoint.searchParams.append("query", subPodcastTitle);
  const result = await fetch(endpoint, options);

  const imdbSearchResult = (await result.json()) as IMDBMovieSearchResults;

  if (imdbSearchResult.total_results > 0) {
    const sortedResults = imdbSearchResult.results
      .filter((movie) => movie.original_language === "en")
      .sort((a, b) => {
        const aScore = getBestScore(a.title, subPodcastTitle);
        const bScore = getBestScore(b.title, subPodcastTitle);
        return bScore - aScore;
      });
    const [{ title, id: imdbId }] = sortedResults;
    return { title, imdbId };
  }
}

const getBestScore = (title: string, titleToMatch: string): number => {
  return Math.max(
    ...[
      title.score(titleToMatch),
      title.replaceAll("and", "&").score(titleToMatch),
      title.replaceAll("&", "and").score(titleToMatch)
    ]
  );
};
