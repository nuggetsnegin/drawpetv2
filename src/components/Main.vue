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

<style scoped>
.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  -webkit-text-stroke: 1px white;
  font-size: 4rem;
  margin: 0px 5px 0px 0px;
}

.accent {
  color: #f0df45;
  -webkit-text-stroke: 1px #222222;
}

img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 auto;
}

p {
  background: white;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 25px;
  text-align: center;
}

body {
  min-height: 100vh;
  font-size: 62.5%;
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: 1fr auto;
      grid-template-rows: 1fr auto;
  color: #222222;
  font-family: "Fredoka One", cursive;
  background-color: #f4f4f4;
}
</style>
