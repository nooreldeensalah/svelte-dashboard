<script lang="ts">
  // let resources = ["Meetings", "Participants", "Labels"];
  let resources = ["Participants", "Labels"];
  import { selected } from "../stores";
</script>

<select bind:value={$selected}>
  {#each resources as resource}
    <option value={resource}> {resource} </option>
  {/each}
</select>
