<script lang="ts">
  import ContentPage from "$lib/components/ContentPage.svelte";
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
<ContentPage pageName="contact">
  <Bois slot="filler"/>
  <div slot="content">
    <p>Please feel free to contact us with any topics for shows, questions about episodes or any media enquiries.</p>
    <div style="display: flex;">
      <Email/><div style="align-items: center;"><a href="mailto:PopCultureParenting@gmail.com">PopCultureParenting@gmail.com</a></div>
    </div>
  </div>
</ContentPage>
