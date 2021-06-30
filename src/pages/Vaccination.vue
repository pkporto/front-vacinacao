<template>
    <main>
  <h1>Vainas do </h1>
  <div style="display:flex">
  <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">

    <b-dropdown-item v-for="item in items" :key="item.nome" >{{item.nome}}</b-dropdown-item>
  
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
import TableKid from '../components/Vaccination/TableKid.vue';

import api from "@/services/api.js";
export default {
    items: 'Vaccine',
    components: {
      TableKid
    },
     data() {
    return {
      vacs: [],
      fields:[
        {
          key: 'lote',
          label:'LOTE'
        }
      ]
    };
  },
  mounted() {
    api.get("/getVaccines").then((response) => {
      this.items = response.data.data;
      console.log(this.items);

    });
  },
};

</script>

<style scoped>

</style>