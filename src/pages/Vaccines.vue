<template>
    <main>

        <b-button id="show-btn" @click="showModal">Nova vacina</b-button>
    <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button>
<!--  
 <div>
    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Cadastro de vacinas</h3>
      </div>
      <b-form-input v-model="text" placeholder="Nome"></b-form-input>
      <b-form-input v-model="text" placeholder="Fabricante"></b-form-input>
      <b-form-input v-model="text" placeholder="Descrição"></b-form-input>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
    </b-modal>
  </div> -->

 <div>
    <b-modal ref="my-modal" hide-footer title="Cadastro de Vacinas">
     <form @submit="postData" method="post">
         <input type="text" name="nome" v-model="vac.nome"> <br> <br>
        <input type="text" name="fabricante" v-model="vac.fabricante"><br> <br>
         <input type="text" name="descricao" v-model="vac.descricao">
        <button type="submit"> Salvar</button>
     </form>
       </b-modal>
  </div>

        <b-button variant="outline-primary">Button</b-button>
     
<TableVac/>
    </main>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
import TableVac from '../components/Vaccines/TableVac.vue'
export default {
    name: 'Kids',
     components:{
    TableVac
  },
  data(){return{
      vac:{
          nome: null,
          fabricante: null,
          descricao:null
      }
  }},
     methods: {
         postData(e){
             this.axios.post("http://localhost:6767/addVaccine", this.vac).then((result) =>{
                 alert(result.data.message);
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