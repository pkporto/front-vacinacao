<template>
    <main>
  <h1>Vainas do </h1>
    <b-form>
      <b-form-group >
        <div style="display:flex;">
           <div>
    <b-form-select style="width: 400px; margin-right: 5px;" v-model="selected" :options="items" value-field="id" text-field="nome"></b-form-select>
    <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
  </div>
            
<b-form-input v-model="vaccination.lote"  placeholder="Digite o lote"></b-form-input></div> 

 </b-form-group>
<div style="display:flex; align-items: center;"><b-form-input style="width: 380px;" v-model="vaccination.enf" placeholder="Digite o nome da enfermeira"></b-form-input>
<!-- <b-form-input v-model="vaccination.data_vac" placeholder="Enter your name"></b-form-input></div> -->
<div style="margin-left: 25px;">
<label for="example-datepicker">Data da vacinação</label>
    <b-form-datepicker id="example-datepicker" v-model="vaccination.data_vac" class="mb-2"></b-form-datepicker>

</div>
</div>
 </b-form>
       <!-- <b-button variant="outline-primary">Button</b-button>
        <b-button variant="outline-primary">Button</b-button> -->
<TableKid/>
    </main>
</template>

<script>
import TableKid from '../components/Vaccination/TableKid.vue';

import api from "@/services/api.js";
export default {
    name: 'Vaccination',
    components: {
      TableKid
    },
     data() {
    return {
      id: this.$route.params.id,
      vaccination:{
        id_crianca:this.id,
        id_vacina: this.selected,
        lote: null,
        enf: null,
        data_vac: null
      },
      selected:null,
      items: [],
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
  methods:{
     postData(e){
             this.axios.post("http://localhost:6767/addvaccination", this.vaccination).then((result) =>{
               this.forceRerender();
                 alert(result.data.message);
             })
             e.preventDefault();
         },
  }
};

</script>

<style scoped>

</style>