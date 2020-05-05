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
</style>
