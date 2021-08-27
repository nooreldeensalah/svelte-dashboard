<!-- App.svelte is the root component -->
<script lang="ts">
  import FormModal from "./FormModal.svelte";
  import Participants from "./Participants.svelte";
  import Labels from "./Labels.svelte";
  import DropdownMenu from "./DropdownMenu.svelte";
  import { selected } from "../stores";
</script>

<FormModal />

<DropdownMenu />

{#if $selected === "Participants"}
  {#key selected}
    <Participants />
  {/key}
{:else if $selected === "Labels"}
  {#key selected}
    <Labels />
  {/key}
{/if}
