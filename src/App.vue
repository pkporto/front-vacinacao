<template>
  <div id="app">
    <b-table hover striped :items="items"></b-table>
  </div>
</template>

<script>

export default{
  data(){
    return{
      items:[{
        name: 'Joao',
        idade: 20
      },
      {
        name: 'Maria',
        idade: 20
      },
      {
        name: 'Joao',
        idade: 20
      }]
    }
  }
}
</script>

<style>

</style>
