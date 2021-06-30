<template>
  <div id="app">
    <b-table style="max-width:500px" bordered id="kids-table" hover striped :fields="fields" :items="items"></b-table>

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
          key: 'nome',
          label:'NOME'
        },
        {
          key: 'descricao',
          label:'DESCRIÇÃO'
        },
        {
          key:'fabricante',
          label:'FABRICANTE'
        }

      ]
    };
  },
  mounted() {
    api.get("/getvaccines").then((response) => {
      console.log(response);
      this.items = response.data.data;
    });
  },
};
</script>

<style scoped>
#kids-table {
  padding: 10px;
}




</style>
