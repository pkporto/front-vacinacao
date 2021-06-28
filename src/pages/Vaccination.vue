<template>
    <main>
  <h1>Lista de vacina</h1>
  <div style="display:flex">
  <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
    <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item>Second Action</b-dropdown-item>
    <b-dropdown-item>Third Action</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>
<b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
</div>

<div style="display:flex"><b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
<b-form-input v-model="text" placeholder="Enter your name"></b-form-input></div>

       <!-- <b-button variant="outline-primary">Button</b-button>
        <b-button variant="outline-primary">Button</b-button> -->
<TableKid/>
    </main>
</template>

<script>
import TableKid from '../components/Vaccines/TableKid.vue'
export default {
    name: 'Vaccine',
    components: {
      TableKid
    }
}
</script>

<style scoped>

</style>