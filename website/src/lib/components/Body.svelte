

<script lang="ts">
  export let title:string
</script>

<style>
  .body{
    display: flex;
    height: calc(100% - 140px)
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
  .content-wrapper {
    padding: 20px;
    border-radius: 21px;
    border: 3px solid var(--white, #FFF);
    flex-grow: 1;
    width: 62%;
    overflow: auto;
    display: grid;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .content {
    overflow-y:scroll;
    flex-grow: 1;
  }
  .filler {
    width:38%;
    overflow: hidden;
  }

  .content-wrapper::-webkit-scrollbar {
    display: none;
  }
  .content::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */

</style>


<div class="body">
    <div class="filler">
      <h1 >{title}</h1>
      <slot name="filler"/>
    </div>
    <div class="content-wrapper">
      <slot name="content-header"/>
      <div class="content">
        <slot name="content"/>
      </div>
    </div>
</div>