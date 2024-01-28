export interface Test {
  hi: string;
}

export interface SimpleCastFeed {
  rss: RSS;
}

export interface RSS {
  $: RSSClass;
  channel: Channel[];
}

export interface RSSClass {
  version: string;
  "xmlns:atom": string;
  "xmlns:content": string;
  "xmlns:googleplay": string;
  "xmlns:itunes": string;
  "xmlns:media": string;
  "xmlns:podcast": string;
}

export interface Channel {
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

export interface AtomLinkElement {
  $: AtomLink;
}

export interface AtomLink {
  href: string;
  rel: string;
  title?: string;
  type?: string;
  xmlns?: string;
}

export interface Image {
  link: string[];
  title: string[];
  url: string[];
}

export interface Item {
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

export enum Author {
  AuthorGarveyBillyGmailCOMDRBillyGarveyNickMcCormack = "garvey.billy@gmail.com (Dr Billy garvey, Nick McCormack)",
  AuthorGarveyBillyGmailCOMDRBillyGarveyNickMccormack = "garvey.billy@gmail.com (Dr Billy garvey, Nick mccormack)",
  AuthorGarveyBillyGmailCOMNickMcCormackDRBillyGarvey = "garvey.billy@gmail.com (Nick McCormack, Dr Billy garvey)",
  GarveyBillyGmailCOMBillyGarvey = "garvey.billy@gmail.com (Billy Garvey)",
  GarveyBillyGmailCOMDRBillyGarvey = "garvey.billy@gmail.com (Dr Billy Garvey)",
  GarveyBillyGmailCOMDRBillyGarveyNickMcCormack = "garvey.billy@gmail.com (Dr Billy Garvey, Nick McCormack)",
  GarveyBillyGmailCOMDRBillyGarveyNickMccormack = "garvey.billy@gmail.com (Dr Billy Garvey, Nick mccormack)",
  GarveyBillyGmailCOMNickMcCormackDRBillyGarvey = "garvey.billy@gmail.com (Nick McCormack, Dr Billy Garvey)"
}

export interface EnclosureElement {
  $: Enclosure;
}

export interface Enclosure {
  length: string;
  type: Type;
  url: string;
}

export enum Type {
  AudioMPEG = "audio/mpeg"
}

export interface GUIDElement {
  _: string;
  $: GUID;
}

export interface GUID {
  isPermaLink: string;
}

export enum Itunes {
  BillyGarvey = "Billy Garvey",
  DRBillyGarvey = "Dr Billy Garvey",
  DRBillyGarveyNickMcCormack = "Dr Billy Garvey, Nick McCormack",
  DRBillyGarveyNickMccormack = "Dr Billy Garvey, Nick mccormack",
  ItunesDRBillyGarveyNickMcCormack = "Dr Billy garvey, Nick McCormack",
  ItunesDRBillyGarveyNickMccormack = "Dr Billy garvey, Nick mccormack",
  ItunesNickMcCormackDRBillyGarvey = "Nick McCormack, Dr Billy garvey",
  NickMcCormackDRBillyGarvey = "Nick McCormack, Dr Billy Garvey"
}

export enum ItunesEpisodeType {
  Full = "full",
  Trailer = "trailer"
}

export enum ItunesExplicit {
  No = "no"
}

export interface ItunesImageElement {
  $: ItunesImage;
}

export interface ItunesImage {
  href: string;
}

export interface ChannelItunesCategory {
  $: ItunesCategory;
  "itunes:category": ItunesCategoryItunesCategory[];
}

export interface ItunesCategory {
  text: string;
}

export interface ItunesCategoryItunesCategory {
  $: ItunesCategory;
}

export interface ItunesOwner {
  "itunes:name": Itunes[];
  "itunes:email": string[];
}

export interface Podcast {
  episodeNumber: number;
  episodeName: string;
  description: string;
  thumbnail: string;
  // spotify: string;
  // apple: string;
  // google: string;
  // simpleCast: string;
}

export type PodcastList = { podcasts: Podcast[] };
