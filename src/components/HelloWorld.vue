<template>
  <div class="p">
    <div class="c"></div>
  </div>
</template>

<script>
import {bSort} from '../utils/public'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created(){
    console.log(bSort([12,1,82,4,55,8,4,5,44,748,788,445,4,55,45,4,554,554,5545,4544587,8545,578845,8844894,5]))
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background: red;
}
.c{
   width: 100px;
  height: 100px;
  background: black;
}
</style>
