<script lang="ts">
  export let direction:"up" |"down" | "right" | "left"
  const rotationMap = new Map([["up", 180],["down", 0], ["left", 270],["right", 90]])
</script>
<svg transform={`rotate(${rotationMap.get(direction)})`} xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9"   fill="none">
<path  d="M16 1.56359L8.5 7.0332L1 1.56359" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>