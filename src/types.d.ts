interface Test {
  hi: string;
}

interface SimpleCastFeed {
  rss: RSS;
}

interface RSS {
  $: RSSClass;
  channel: Channel[];
}

interface RSSClass {
  version: string;
  "xmlns:atom": string;
  "xmlns:content": string;
  "xmlns:googleplay": string;
  "xmlns:itunes": string;
  "xmlns:media": string;
  "xmlns:podcast": string;
}

interface Channel {
  "atom:link": AtomLinkElement[];
  generator: string[];
  title: string[];
  description: string[];
  language: string[];
  pubDate: string[];
  lastBuildDate: string[];
  image: Image[];
  link: string[];
  "itunes:type": string[];
  "itunes:summary": string[];
  "itunes:author": Itunes[];
  "itunes:explicit": ItunesExplicit[];
  "itunes:image": ItunesImageElement[];
  "itunes:new-feed-url": string[];
  "itunes:keywords": string[];
  "itunes:owner": ItunesOwner[];
  "itunes:category": ChannelItunesCategory[];
  item: Item[];
}

interface AtomLinkElement {
  $: AtomLink;
}

interface AtomLink {
  href: string;
  rel: string;
  title?: string;
  type?: string;
  xmlns?: string;
}

interface Image {
  link: string[];
  title: string[];
  url: string[];
}

interface Item {
  guid: GUIDElement[];
  title: string[];
  description: string[];
  pubDate: string[];
  author: Author[];
  link: string[];
  enclosure: EnclosureElement[];
  "itunes:title": string[];
  "itunes:author": Itunes[];
  "itunes:duration": string[];
  "itunes:summary": string[];
  "itunes:subtitle": string[];
  "itunes:explicit": ItunesExplicit[];
  "itunes:episodeType": ItunesEpisodeType[];
  "itunes:episode"?: string[];
  "itunes:image"?: ItunesImageElement[];
  "itunes:keywords"?: string[];
  "content:encoded"?: string[];
}

enum Author {
  AuthorGarveyBillyGmailCOMDRBillyGarveyNickMcCormack = "garvey.billy@gmail.com (Dr Billy garvey, Nick McCormack)",
  AuthorGarveyBillyGmailCOMDRBillyGarveyNickMccormack = "garvey.billy@gmail.com (Dr Billy garvey, Nick mccormack)",
  AuthorGarveyBillyGmailCOMNickMcCormackDRBillyGarvey = "garvey.billy@gmail.com (Nick McCormack, Dr Billy garvey)",
  GarveyBillyGmailCOMBillyGarvey = "garvey.billy@gmail.com (Billy Garvey)",
  GarveyBillyGmailCOMDRBillyGarvey = "garvey.billy@gmail.com (Dr Billy Garvey)",
  GarveyBillyGmailCOMDRBillyGarveyNickMcCormack = "garvey.billy@gmail.com (Dr Billy Garvey, Nick McCormack)",
  GarveyBillyGmailCOMDRBillyGarveyNickMccormack = "garvey.billy@gmail.com (Dr Billy Garvey, Nick mccormack)",
  GarveyBillyGmailCOMNickMcCormackDRBillyGarvey = "garvey.billy@gmail.com (Nick McCormack, Dr Billy Garvey)"
}

interface EnclosureElement {
  $: Enclosure;
}

interface Enclosure {
  length: string;
  type: Type;
  url: string;
}

enum Type {
  AudioMPEG = "audio/mpeg"
}

interface GUIDElement {
  _: string;
  $: GUID;
}

interface GUID {
  isPermaLink: string;
}

enum Itunes {
  BillyGarvey = "Billy Garvey",
  DRBillyGarvey = "Dr Billy Garvey",
  DRBillyGarveyNickMcCormack = "Dr Billy Garvey, Nick McCormack",
  DRBillyGarveyNickMccormack = "Dr Billy Garvey, Nick mccormack",
  ItunesDRBillyGarveyNickMcCormack = "Dr Billy garvey, Nick McCormack",
  ItunesDRBillyGarveyNickMccormack = "Dr Billy garvey, Nick mccormack",
  ItunesNickMcCormackDRBillyGarvey = "Nick McCormack, Dr Billy garvey",
  NickMcCormackDRBillyGarvey = "Nick McCormack, Dr Billy Garvey"
}

enum ItunesEpisodeType {
  Full = "full",
  Trailer = "trailer"
}

enum ItunesExplicit {
  No = "no"
}

interface ItunesImageElement {
  $: ItunesImage;
}

interface ItunesImage {
  href: string;
}

interface ChannelItunesCategory {
  $: ItunesCategory;
  "itunes:category": ItunesCategoryItunesCategory[];
}

interface ItunesCategory {
  text: string;
}

interface ItunesCategoryItunesCategory {
  $: ItunesCategory;
}

interface ItunesOwner {
  "itunes:name": Itunes[];
  "itunes:email": string[];
}

interface Podcast {
  episodeNumber: number;
  episodeName: string;
  description: string;
  thumbnail: string;
  spotify: string;
  apple: string;
  google: string;
  // simpleCast: string;
  movieTitle: string;
  imdbId: number;
}

type PodcastList = { podcasts: Podcast[] };

interface MovieSearchResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface IMDBMovieSearchResults {
  page: number;
  results: MovieSearchResult[];
  total_pages: number;
  total_results: number;
}
