<template>
  <main class="wrapper">
    <header>
      <span class="draw-icon">✏</span>
      <h1>Draw my <span class="accent">Pet</span></h1>
      <span class="window-icons"
        ><i class="fas fa-window-minimize"></i
        ><i class="far fa-window-maximize"></i><i class="fas fa-times"></i
      ></span>
    </header>
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
  background: #dfdcfa;
  color: white;
}

header {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  background: #0D1821;
}

.window-icons {
  padding: 10px;
  color: white;
}

.draw-icon {
  padding: 10px;
  color: white;
}

i {
  padding-left: 6px;
}

h1 {
  padding-top: 15px;
  text-align: left;
  text-transform: uppercase;
  /* -webkit-text-stroke: 3px white; */
  font-size: 1rem;
  /* margin: 2rem 0; */
}

h1 .accent {
  color: #E6AACE;
  font-size: 1.1rem;
}

p .accent {
  color: #E6AACE;
  -webkit-text-stroke: 0.8px #0D1821;
}

p {
  margin-top: 2rem;
  margin-left: 290px;
  width: 50%;
  background: white;
  color: #0D1821;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 25px;
  text-align: right;
}

@media (max-width: 1435px) {
  header {
    min-width: 700px;
  }

  p {
    margin-left: 0px;
    margin-bottom: 10px;
  }
}
</style>
