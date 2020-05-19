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
  background: rgb(240, 240, 240);
  color: white;
}

header {
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  background: #E7E247;
  color: #3D3B30;
}

.window-icons {
  color: white;
  -webkit-text-stroke: .8px black;
}

.draw-icon {
  padding-top: 15px;
  color: white;
  -webkit-text-stroke: 1px #3D3B30;
}

h1 {
  padding-top: 10px;
  text-align: left;
  text-transform: uppercase;
  -webkit-text-stroke: 1px white;
  font-size: 1.6rem;
  color: #3D3B30;
}

h1 .accent {
  color: rgb(108, 159, 247);
  -webkit-text-stroke: 1px white;
  font-size: 1.6rem;
  padding-left: 5px;
}

p .accent {
  color: #E7E247;
  -webkit-text-stroke: .9px #0D1821;
}

p {
  margin-top: 2rem;
  margin-left: 290px;
  width: 50%;
  background: white;
  color: #3D3B30;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 25px;
  text-align: right;
}


@media (max-width: 1450px){

  p {
    margin-left: 0px;
    margin-bottom: 10px;
  }

}

@media (max-width: 1450px){

  .wrapper{
    max-width: 800px;
  }

}


@media (max-width: 880px){

  .wrapper{
    min-width: 520px;
    border: 1px solid red;
  }

}
</style>
