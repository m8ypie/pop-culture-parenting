<script>
  import ImageLink from "./ImageLink.svelte"
  import Spotify from "../../assets/Spotify.svg.svelte"
  import GooglePodcasts from "../../assets/GooglePodcasts.svg.svelte"
  import ApplePodcasts from "../../assets/ApplePodcasts.svg.svelte"
  import Simplecast from "../../assets/Simplecast.svg.svelte"
  import Instagram from "../../assets/Instagram.svg.svelte"
  import Rss from "../../assets/Rss.svg.svelte"

</script>

<style>
  .socials {
    display: flex;
    gap: 45px;
  }

  @media only screen and (max-width: 600px) {
    .socials {
      gap: 20px;
    }
  }
</style>

<div class="socials">
  <ImageLink height={30} link={"https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0"}><Instagram slot="image"/></ImageLink>
  <ImageLink height={30} link={"https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0"}><Spotify size={30} slot="image"/></ImageLink>
  <ImageLink height={30} link={"https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw"}><GooglePodcasts size={30} slot="image"/></ImageLink>
  <ImageLink height={30} link={"https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931"}><ApplePodcasts size={30} slot="image"/></ImageLink>
  <ImageLink height={30} link={"https://pop-culture-parenting.simplecast.com"}><Simplecast size={30} slot="image"/></ImageLink>
  <ImageLink height={30} link={"https://feeds.simplecast.com/_7lcF_6g"}><Rss slot="image"/></ImageLink>
</div>