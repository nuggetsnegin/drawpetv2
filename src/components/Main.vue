<template>
  <main class="wrapper">
    <header><span class="draw-icon">✏</span><h1>Draw my <span class="accent">Pet</span></h1><span class="window-icons"><i class="fas fa-window-minimize"></i><i class="far fa-window-maximize"></i><i class="fas fa-times"></i></span></header>
    <p>
      Draw your <span class="accent">pet</span> (imaginary or real) in the
      canvas below! Use the <span class="accent">save</span> feature so the
      entire world can see your masterpiece.
    </p>

    <Canvas />
  </main>
</template>

<script>
import Canvas from "./Canvas.vue";

export default {
  name: "Main",
  components: {
    Canvas,
  },
};
</script>

<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 700px;
  border: 1px solid black;
  background: #E0E3EF;
}

header{
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    min-width: 805px;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);  
}

.window-icons{
  display: block;
  float: right;
}

.draw-icon{
  padding: 10px;
}

h1 {
  padding-top: 10px;
  text-align: left;
  text-transform: uppercase;
  /* -webkit-text-stroke: 3px white; */
  font-size: 1rem;
  /* margin: 2rem 0; */
}

h1 .accent {
  color: #f0df45;
  -webkit-text-stroke: 2px #222222;
}

span {
  color: #f0df45;
  -webkit-text-stroke: 0.8px #222222;
}

p {
  background: white;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 25px;
  text-align: center;
}
</style>
