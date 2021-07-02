<template>
    <main>
      <h1>Lista de crianças</h1>
      <div style="margin: 20px;">
        <b-button variant="primary" style="margin: 20px;" id="show-btn" @click="showModal(null,'cadastro-modal')">NOVA CRIANÇA</b-button>
        <b-button  href="/vaccines">LISTAR VACINAS</b-button>
        
        </div>
        
         <div>
    <b-modal ref="cadastro-modal" hide-footer title="Cadastro de Criança">
     <b-form @submit="postData" method="post">
       <h4>Nome</h4>
         <b-form-input type="text" name="nome" v-model="kid.nome"></b-form-input> <br> <br>
         <h4>CPF</h4>
        <b-form-input type="text" name="fabricante" v-model="kid.cpf"> </b-form-input> <br> <br>
        <b-button variant="success"  style="margin: 20px;" id="show-btn" type="submit" >SALVAR</b-button>
        <b-button variant="danger" style="margin: 20px;" id="show-btn" @click="hideModal('cadastro-modal')" type="button">CANCELAR</b-button>
        <!-- <button type="submit"> Salvar</button> -->
     </b-form>
       </b-modal>
  </div>



          <div  id="app">
    <b-table :key="componentKey"   bordered id="kids-table" hover striped  :fields="fields"  :items="items">
      <template  v-slot:cell(actions)="{ item }" >
        <!-- <b-button variant="primary" @click="showModal">Cadastro de criança</b-button> -->
          <b-button variant="warning" style="margin: 0px 3px 0px 3px;"> <b-icon icon="pencil" font-scale="1.0"></b-icon></b-button>
          <b-button variant="danger" @click="showModal(item.id, 'delete-modal')" style="margin: 0px 3px 0px 3px;" > <b-icon icon="trash" font-scale="1.0"></b-icon></b-button>
         <!-- <b-button variant="primary" @click="editar(data.id)">Remover</b-button> -->
          <b-button variant="primary" v-bind:href="'/vaccination/' + item.id" style="margin: 0px 3px 0px 3px;"> <b-icon icon="list" font-scale="1.0"></b-icon></b-button>

         
      </template>
    </b-table>

  </div>

       <div>
    <b-modal ref="delete-modal" hide-footer title="Deseja deletar o cadastro?">
     <b-form @submit="deleteKid" method="delete">
        <b-button variant="success" style="margin: 20px;" id="show-btn" type="submit" >DELETAR</b-button>
        <b-button variant="danger" style="margin: 20px;" id="show-btn" @click="hideModal('delete-modal')" type="button">CANCELAR</b-button>
        <!-- <button type="submit"> Salvar</button> -->
     </b-form>
       </b-modal>
  </div>



  
<!-- <Table :key="componentKey"/> -->
    </main>
</template>

<script>
import api from "@/services/api.js";
// import Table from '../components/Kids/Table.vue'
export default {
    name: 'Kids',
     components:{
    // Table
  },
  
  data(){return{
    id:0,
    componentKey:0,
      kid:{
          nome: null,
          cpf: null
      },
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
  }},
  mounted(){
    api.get("/getKids",{
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }} ).then((response) => {
      this.items = response.data.data;
    });
  },
     methods: {
         forceRerender() {
           console.log('force');
      this.componentKey += 1;
    },
     clearFields(){
              this.kid.nome= "",
       this.kid.cpf=""
                 },
         postData(e){
             this.axios.post("http://localhost:6767/addkid", this.kid).then((result) =>{
                 alert(result.data.message);
                 console.log(this.componentKey);
                this.hideModal('cadastro-modal');
               this.forceRerender();
               this.clearFields();
               
             })
             e.preventDefault();
         },

            deleteKid(e){
             this.axios.delete("http://localhost:6767/deletekid/" + this.id).then((result) =>{
                 alert(result.data.message);
                     console.log(this.componentKey);
this.hideModal('delete-modal');
               this.forceRerender();
               this.clearFields();
               
             })
             e.preventDefault();
         },
      showModal(id, modal) {
        this.id = id;
        this.$refs[modal].show()
      },
      hideModal(modal) {
        this.$refs[modal].hide()
      }
    }
}
</script>

<style scoped>

</style>