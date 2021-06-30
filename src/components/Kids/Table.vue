<template>
  <div id="app">
    <b-table id="kids-table" hover striped  :fields="fields" :items="items">
      <template v-slot:cell(actions)="{ item }" >
        <!-- <b-button variant="primary" @click="showModal">Cadastro de criança</b-button> -->
          <b-button variant="warning" style="margin: 0px 3px 0px 3px;"> <b-icon icon="pencil" font-scale="1.0"></b-icon></b-button>
          <b-button variant="danger" style="margin: 0px 3px 0px 3px;" > <b-icon icon="trash" font-scale="1.0"></b-icon></b-button>
         <!-- <b-button variant="primary" @click="editar(data.id)">Remover</b-button> -->
          <b-button variant="primary" v-bind:href="'/vaccination/' + item.id" style="margin: 0px 3px 0px 3px;"> <b-icon icon="list" font-scale="1.0"></b-icon></b-button>

         
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
    });
  }
};
</script>

<style scoped>
#kids-table {
  padding: 10px;
}


</style>
