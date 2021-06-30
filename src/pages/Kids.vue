<template>
    <main>
      <h1>Lista de crianças</h1>
      <div style="margin: 20px;">
        <b-button variant="primary" style="margin: 20px;" id="show-btn" @click="showModal">NOVA CRIANÇA</b-button>
        <b-button  href="/vaccines">LISTAR VACINAS</b-button>
        
        </div>
        
         <div>
    <b-modal ref="my-modal" hide-footer title="Cadastro de Criança">
     <b-form @submit="postData" method="post">
       <h4>Nome</h4>
         <b-form-input type="text" name="nome" v-model="kid.nome"></b-form-input> <br> <br>
         <h4>CPF</h4>
        <b-form-input type="text" name="fabricante" v-model="kid.cpf"> </b-form-input> <br> <br>
        <b-button variant="success" style="margin: 20px;" id="show-btn" type="submit" >SALVAR</b-button>
        <b-button variant="danger" style="margin: 20px;" id="show-btn" @click="hideModal()" type="button">CANCELAR</b-button>
        <!-- <button type="submit"> Salvar</button> -->
     </b-form>
       </b-modal>
  </div>

        
<Table :key="componentKey"/>
    </main>
</template>

<script>

import Table from '../components/Kids/Table.vue'
export default {
    name: 'Kids',
     components:{
    Table
  },
  
  data(){return{
    componentKey:0,
      kid:{
          nome: null,
          cpf: null
      }
  }},
     methods: {
         forceRerender() {
      this.componentKey += 1;
    },
         postData(e){
             this.axios.post("http://localhost:6767/addkid", this.kid).then((result) =>{
               this.forceRerender();
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