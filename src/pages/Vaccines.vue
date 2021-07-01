<template>
    <main>
      <h1>Lista de vacinas</h1>
<div style="margin: 20px;">
        <b-button variant="primary" style="margin: 20px;" id="show-btn" @click="showModal">Nova vacina</b-button>
       <b-button href="/kids" >Cancelar</b-button>
</div>

 <div>
    <b-modal ref="my-modal" hide-footer title="Cadastro de Vacinas">
     <b-form @submit="postData" method="post">
        <h5>Nome</h5>
         <b-form-input type="text" name="nome" v-model="vac.nome"> </b-form-input> <br> <br>
         <h5>Fabricante</h5>
        <b-form-input type="text" name="fabricante" v-model="vac.fabricante"> </b-form-input><br> <br>
        <h5>Descrição</h5>
         <b-form-textarea type="text" name="descricao" v-model="vac.descricao"> </b-form-textarea>
         <b-button variant="success" style="margin: 20px;" id="show-btn" type="submit" >SALVAR</b-button>
        <b-button variant="danger" style="margin: 20px;" id="show-btn" @click="hideModal()" type="button">CANCELAR</b-button>
       
     </b-form>
       </b-modal>
  </div>
     
<TableVac :key="componentKey" />
    </main>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
import TableVac from '../components/Vaccines/TableVac.vue'
export default {
    name: 'Vaccines',
     components:{
    TableVac
  },
  data(){return{
      componentKey:0,
      vac:{
          nome: null,
          fabricante: null,
          descricao:null
      }
  }},
     methods: {
         forceRerender() {
      this.componentKey += 1;
    },
         postData(e){
             this.axios.post("http://localhost:6767/addVaccine", this.vac).then((result) =>{
                 alert(result.data.message);
                 this.forceRerender();
             })
             e.preventDefault();
         },
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
    }
}
</script>

<style scoped>

</style>