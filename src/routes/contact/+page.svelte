<script lang="ts">
  import Banner from "$lib/Banner.svelte"
  import Body from "$lib/Body.svelte"
  import Footer from "$lib/Footer.svelte";
  import Bois from "../../assets/Bois.svg.svelte"
  import Email from "../../assets/Email.svg.svelte";
</script>
<style>

  a {
    font-family: Cairo;
    font-size: 24px;
    font-style: normal;
    color:white;
    text-decoration: none;
    padding-left: 16px;
    text-align: center;
  }

</style>
<div>
  <Banner/>
  <div class="main">
    <Body title={"contact"}>
      <Bois slot="filler"/>
      <div slot="content">
        <p>Please feel free to contact us with any topics for shows, questions about episodes or any media enquiries.</p>
        <div style="display: flex;">
          <Email/><div style="align-items: center;"><a href="mailto:PopCultureParenting@gmail.com">PopCultureParenting@gmail.com</a></div>
        </div>
      </div>
    </Body>
  </div>
<Footer/>
</div>