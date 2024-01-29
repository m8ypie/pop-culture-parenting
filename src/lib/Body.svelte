

<script lang="ts">
  export let title:string
</script>

<style>
  .body{
    display: flex;
    flex-direction: row;
    padding-top: 12px;
    /* padding-bottom: 12px; */
    max-height: 900px;
  }
  h1{
    font-size: 90px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 90px */
    color: white;
    margin-left: 71px;
    margin-bottom: 10px;
  }
  .content {
    padding: 16px 40px;
    border-radius: 21px;
    border: 3px solid var(--white, #FFF);
    flex-grow: 1;
    width: 62%;
    overflow-y:scroll
  }
  .filler {
    width:38%;
    overflow: hidden;
  }

  .content::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .content {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>


<div class="body">
  <div class="filler">
    <h1 >{title}</h1>
    <slot name="filler"/>
  </div>
  <div class="content">
    <slot name="content"/>
  </div>
</div>