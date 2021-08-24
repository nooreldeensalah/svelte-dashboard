<!-- App.svelte is the root component -->
<script lang="ts">
  import type { Participant } from "../types/Participant";
  import type { Label } from "../types/Label";
  import type { Meeting } from "../types/Meeting";

  import load from "../sql-query";

  let name = "Noor";
  let participants_query: Promise<Array<Participant>> = load(
    "SELECT * FROM participant"
  );
</script>

{#await participants_query then participants}
  {#each participants as participant}
    <div>{participant.name}</div>
  {/each}
{/await}
