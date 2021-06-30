<template>
  <div id="app">
    <b-table id="kids-table" hover striped :fields="fields" :items="items"></b-table>

  </div>
</template>

<script>
import api from "@/services/api.js";
export default {
  data() {
    return {
      id: this.$route.params.id,
      items: [],
      fields:[
        {
          key: 'lote',
          label:'LOTE'
        },
        {
          key: 'enf',
          label: 'ENFERMEIRA(O)'
        },
        {
          key:'data_vac',
          label: 'DATA VACINAÇÃO'
        }
      ]
    };
  },
  mounted() {
    api.get("/getvaccination/" + this.id).then((response) => {
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
