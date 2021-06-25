<template>
  <div id="app">
     <b-table id="kids-table" hover striped :items="items"></b-table>
     
     
  </div>
</template>

<script>
import api from '@/services/api.js';
export default{
  data(){
    return{
      items:[]
    }
  },
  mounted(){
      api.get('/getKids').then(response => {
          console.log(response);
            this.items = response.data.data;
        });
  }
}
</script>

<style scoped>

#kids-table{
    padding: 10px;
}

</style>
