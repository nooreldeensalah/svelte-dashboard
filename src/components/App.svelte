<!-- App.svelte is the root component -->
<script lang="ts">
  import type { Participant } from "../types";
  import { Datatable, rows } from "svelte-simple-datatables";
  import requests from "../requests";
  import load from "../sql-query";
  import { onMount } from "svelte";
  import Form from "./Form.svelte";
  import { formObject } from "../stores";

  let settings = { columnFilter: true };
  let participants: Array<Participant>;

  onMount(() =>
    load("SELECT * FROM participant").then((values) => (participants = values))
  );

  let handleEdit = (event, index) => {
    let resourceId = event.target.attributes["data-id"].value;
    let resourceType = event.target.attributes["data-type"].value;
    let requestBody; // TODO: Implement pop-up form for requestBody

    requests
      .patchResource(resourceId, resourceType, requestBody)
      .then((response) => (participants[index] = response.data))
      .catch((error) => alert(error));
  };
</script>

<Datatable {settings} data={participants}>
  <thead>
    <th data-key="id">ID</th>
    <th data-key="name">Name</th>
    <th>Actions</th>
  </thead>
  <tbody>
    {#each $rows as { id, name }, i}
      <tr>
        <td>
          {id}
        </td>
        <td>
          {name}
        </td>
        <td>
          <button data-type="participants" data-id={id} on:click={(event, index = i) => handleEdit(event, index)}>Edit</button>
        </td>
      </tr>
    {/each}
  </tbody>
</Datatable>

<style>
  td {
    text-align: center;
    padding: 4px 0;
  }
</style>
