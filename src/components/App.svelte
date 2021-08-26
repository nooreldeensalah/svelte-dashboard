<!-- App.svelte is the root component -->
<script lang="ts">
  import { Datatable, rows } from "svelte-simple-datatables";
  import requests from "../requests";
  import load from "../sql-query";
  import { onMount } from "svelte";
  import Form from "./Form.svelte";
  import FormModal from "./FormModal.svelte";
  import { participants, modal } from "../stores";
  import { bind } from "svelte-simple-modal";

  let settings = { columnFilter: true };

  onMount(() =>
    load("SELECT * FROM participant").then((values) => participants.set(values))
  );

  let handleEdit = (event, index) => {
    modal.set(
      bind(Form, {
        index: index,
        resourceId: event.target.attributes["data-id"].value,
        resourceType: event.target.attributes["data-type"].value,
        formMethod: requests.patchResource,
      })
    );
  };
</script>

<Datatable {settings} data={$participants}>
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
          <button
            data-type="participants"
            data-id={id}
            on:click={(event, index = i) => handleEdit(event, index)}
            >Edit</button
          >
        </td>
      </tr>
    {/each}
  </tbody>
</Datatable>

<FormModal />

<style>
  td {
    text-align: center;
    padding: 4px 0;
  }
</style>
