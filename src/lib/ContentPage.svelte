<script lang="ts">
  import Banner from "$lib/Banner.svelte"
  import Body from "$lib/Body.svelte"
  import Footer from "$lib/Footer.svelte";
  export let pageName:string
</script>




<div class="main">
  <Banner/>
  <Body title={pageName}>
    <slot slot="filler" name="filler"/>
    <slot slot="content" name="content"/>
  </Body>
  <Footer/>
</div>

