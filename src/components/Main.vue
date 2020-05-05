<template>
  <div class="hello">
    <h1>Draw My Pet</h1>
    <Canvas />
  </div>
</template>

<script>
import Canvas from './Canvas.vue'

export default {
  name: 'Main',
  // props: {
  //   msg: String
  // }
  components: {
    Canvas
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
