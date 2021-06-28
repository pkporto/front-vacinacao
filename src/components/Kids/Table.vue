<template>
  <div id="app">
    <b-table id="kids-table" hover striped  :fields="fields" :items="items">
      <template v-slot:cell(actions)="data">
        <!-- <b-button variant="primary" @click="showModal">Cadastro de criança</b-button> -->
         <b-button variant="primary" @click="editar(data.id)">Remover</b-button>
          <b-button variant="primary" v-bind:href="'/vaccination/' + data.cpf">Vacinas</b-button>
      </template>
    </b-table>

  </div>
</template>

<script>
import api from "@/services/api.js";
export default {
  data() {
    return {
      items: [],
      fields:[
        {
          key:'cpf',
          label:'CPF'

        },
        {
          key:'nome',
          label:'NOME'

        },
        {
          key: 'actions',
          label: "OPERAÇÕES"
        }
      ]
    };
  },
  mounted() {
    api.get("/getKids",{
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }} ).then((response) => {
      this.items = response.data.data;
console.log(this.items);

    });
  },
};
</script>

<style scoped>
#kids-table {
  padding: 10px;
}


</style>
