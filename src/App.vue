<template>
  <div class="main">
    <router-view path="$router.key"/>
  </div>
</template>

<script>
import './css/styles.css';
export default {
  name: 'App',
  components:{
    
  }
}
</script>

<style scoped>

.main{
  justify-content: center;
  align-items: center;
  }

</style>