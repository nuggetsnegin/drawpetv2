<template>
  <main class="wrapper">
    <h1>Draw my <span class="accent">Pet</span></h1>
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
  justify-content: center;
  flex-direction: column;
  min-width: 700px;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  -webkit-text-stroke: 3px white;
  font-size: 4rem;
  margin: 2rem 0;
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
