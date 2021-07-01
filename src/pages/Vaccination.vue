<template>
    <main>
  <h1>Vainas do {{id}} </h1>
    <b-form @submit="postData" method="post">
      <b-form-group>
        <div style="display:flex;">
          <div style="display:flex; align-items: center;"> 
           <div >
             <label for="drop-vacs">Selecione a vacina</label>
    <b-form-select id="drop-vacs" style="width: 400px; margin-right: 5px;" v-model="vaccination.id_vacina" :options="items" value-field="id" text-field="nome"></b-form-select>
    <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
  </div>
            
<b-form-input style="margin-top: 30px;" v-model="vaccination.lote"  placeholder="Digite o lote"></b-form-input></div> 
        </div>
 </b-form-group>
<div style="display:flex; align-items: center;"><b-form-input style="width: 380px;" v-model="vaccination.enf" placeholder="Digite o nome da enfermeira"></b-form-input>
<!-- <b-form-input v-model="vaccination.data_vac" placeholder="Enter your name"></b-form-input></div> -->
<div style="margin-left: 25px;">
<label for="example-datepicker">Data da vacinação</label>
    <b-form-datepicker id="example-datepicker" v-model="vaccination.data_vac" class="mb-2"></b-form-datepicker>

</div>
</div>
<b-button variant="success" style="margin: 20px;" id="show-btn" type="submit" >SALVAR</b-button>
        <b-button variant="danger" style="margin: 20px;" id="show-btn" href="/kids" type="button">CANCELAR</b-button>
 </b-form>
       <!-- <b-button variant="outline-primary">Button</b-button>
        <b-button variant="outline-primary">Button</b-button> -->
<TableKid :key="componentKey"/>
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
      componentKey: 0,
      id: this.$route.params.id,
      vaccination:{
        id_crianca:this.$route.params.id,
        id_vacina: null,
        lote: null,
        enf: null,
        data_vac: null
      },
      // selected:null,
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
      this.forceRerender();
      console.log(this.items);

    });
  },
  methods:{
     postData(e){
             this.axios.post("http://localhost:6767/addvaccination", this.vaccination).then((result) =>{
               this.forceRerender();
this.clearFields();
               
                 alert(result.data.message);
             })
             e.preventDefault();
         },
         clearFields(){
              this.vaccination.lote= "",
       this.vaccination.enf="",
        this.vaccination.data_vac=""
         },
            forceRerender() {
      this.componentKey += 1;
    }
  }
};

</script>

<style scoped>

</style>