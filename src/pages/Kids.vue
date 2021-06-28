<template>
    <main>
        <b-button id="show-btn" @click="showModal">NOVA CRIANÇA</b-button>
        <b-button variant="outline-primary" href="/vaccines">LISTAR VACINAS</b-button>
         <div>
    <b-modal ref="my-modal" hide-footer title="Cadastro de Criança">
     <form @submit="postData" method="post">
         <input type="text" name="nome" v-model="kid.nome"> <br> <br>
        <input type="text" name="fabricante" v-model="kid.cpf"><br> <br>
        <button type="submit"> Salvar</button>
     </form>
       </b-modal>
  </div>

        
<Table/>
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
      kid:{
          nome: null,
          cpf: null
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