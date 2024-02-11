<script lang="ts">
  export let link:string
  export let height:number | undefined = undefined
</script>

<a style={height ? `height:${height}px` : ""} href={link}>
  <slot name="image"/>
</a>