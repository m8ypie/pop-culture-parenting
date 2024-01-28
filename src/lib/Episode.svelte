<style>
  .episode-card {
    display: flex;
    flex-direction: row;
  }
  .episode-content {
    margin-left: 20px;
  }
  h3 {
    margin-top: 0px;
  }
  .sites {
    display: inline-flex;
    gap:20px
  }
</style>

<script lang="ts">
  import type { Podcast } from "../routes/episodes/types";
  import Thumbnail from "./Thumbnail.svelte";
  import ImageLink from "./ImageLink.svelte";
  import Spotify from "../assets/Spotify.svg.svelte";
  import ApplePodcasts from "../assets/ApplePodcasts.svg.svelte";
  import GooglePodcasts from "../assets/GooglePodcasts.svg.svelte";
  import ExpandableDescription from "./ExpandableDescription.svelte";
  export let episode:Podcast
</script>

<div class="episode-card">
  <Thumbnail imgHref={episode.thumbnail} alt={`Episode ${episode.episodeNumber} title image`} />
  <div class="episode-content">
    <h3>{episode.episodeName}</h3>
    <div class="sites">
      <ImageLink link="www.google.com"><Spotify slot="image"/></ImageLink>
      <ImageLink link="www.google.com"><GooglePodcasts slot="image"/></ImageLink>
      <ImageLink link="www.google.com"><ApplePodcasts slot="image"/></ImageLink>
    </div>
    <ExpandableDescription description={episode.description}/>
  </div>
</div>