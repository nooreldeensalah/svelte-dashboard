<script lang="ts">
  let name = "Noor";
  import load from "../sql-query";

  let participants = load("SELECT * FROM participant");
  console.log(participants);
</script>

<h1>Hello {name}!</h1>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
