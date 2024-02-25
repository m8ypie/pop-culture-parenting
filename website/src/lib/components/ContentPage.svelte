<script lang="ts">
  import Banner from "$lib/components/Banner.svelte"
  import Body from "$lib/components/Body.svelte"
  import Footer from "$lib/components/Footer.svelte";
  export let pageName:string
</script>

<div class="main">
  <Banner/>
  <Body title={pageName}>
    <slot slot="filler" name="filler"/>
    <slot class="content-header" slot="content-header" name="content-header"/>
    <slot slot="content" name="content"/>
  </Body>
  <Footer/>
</div>

