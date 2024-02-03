<style>
  img {
    width: 100px;
    height: 100px;
    border: 1px solid var(--white, #FFF);
  }
</style>

<script lang="ts">
  export let imgHref:string
  export let alt:string
</script>

<img alt={alt} src={imgHref}/>