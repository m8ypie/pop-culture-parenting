
<style>
  ol {
    display: flex;
    list-style-type: none;
    flex-grow: 1;
    margin-block-start:0; margin-block-end:0; margin-inline-start:0; margin-inline-end:0;
    padding-block-start:0; padding-block-end:0; padding-inline-start:0; padding-inline-end:0;
    margin: 27px 19px 19px 19px;
  }
  li {
    flex-grow: 1;
  }

   a {
    color: white;
    font-size: 24px;
    font-weight: 400;
    flex-grow: 1;
    cursor: pointer;
    text-align: center;
    background-color: transparent;
    border: none;
    text-decoration: none;
  }

  a.disabled {
  pointer-events: none;
  cursor: default;
}

  a.disabled {
    color: rgba(255, 255, 255, 0.50);
    cursor:default;
    text-decoration: none;
  }

  .selected {
    text-decoration: underline;
    text-underline-offset: 7px;
    text-decoration-thickness: 3px;
  }

  .alphabetSelector {
    border-radius: 10px;
    border: 3px solid white;
    flex-grow: 1;
  }

</style>

<script lang="ts">

  const alphabetElements = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "&123"
  ] as const

  export let selectableCharacters:string[]

  let selected = "a"

  function onCharacterSelected(character:typeof alphabetElements[number]){
    selected = character
  }
  </script>
<div class="alphabetSelector">
  <ol>
    {#each alphabetElements as character}
      <li ><a on:click={() => onCharacterSelected(character)} href={`#${character === "&123" ? "." : character}`} class={character === selected ? "selected" : !selectableCharacters.includes(character === "&123" ? "." : character) ? "disabled" : ""}>{character.toUpperCase()}</a></li>
    {/each}
  </ol>
</div>