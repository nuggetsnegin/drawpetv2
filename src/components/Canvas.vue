<template>
  <div class="settings-canvas-grid">
    <div class="canvas-wrap" id="canvas-wrap">
      <canvas id="canvas" class="draw" @mousedown="startDrawing" @mouseup="stopDrawing" @mousemove="draw" height="500" width="500" ref="canvas"></canvas>
    </div>

    <div class="draw-options">
      <button class="pencil" id="pencil">
        <label for="color-selection">Color </label
        ><input
          name="color-selection"
          type="color"
          id="color-selection"
          class="color-selection"
          @change="this.getColor"
        />
      </button>
      <button class="eraser" id="eraser" v-on:click="erase">
        Eraser
      </button>
      <button class="random-color" id="random-color" v-on:click="getRandomColor">
        ???
      </button>
      <button class="clear" id="clear" v-on:click="clear">Clear</button>
      <button class="save" id="save">Save</button>
    </div>

    <Gallery />
  </div>
</template>

<script>
import Gallery from "./Gallery.vue";

export default {
  name: "Canvas",
  components:{
    Gallery
  },
  data: function() {
    return{
      canvas: null,
      ctx: null,
      drawing: false,
      startX: 0,
      startY: 0,
    }
  },
  mounted(){
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.lineWidth = 10;
    this.ctx.lineCap ="round";
    this.ctx.lineJoin = "round";
  },
  methods: {
    startDrawing(e){
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      this.startX = x;
      this.startY = y;

      this.drawing = true;
      this.draw(e);
    },
    stopDrawing(){
      this.drawing = false;
      this.ctx.beginPath()
    },
    draw(e){
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if(!this.drawing) return;

      this.ctx.lineTo(x, y);
      this.ctx.stroke()

      this.ctx.beginPath()
      this.ctx.moveTo(this.startX, this.startY);

      this.startX = x;
      this.startY = y;
    },
    getColor(e){
      const color = e.currentTarget.value;
      this.ctx.strokeStyle = color;
      console.log(color)
      console.log(this.ctx.strokeStyle)
    },
    clear(){
      this.ctx.clearRect(0, 0, 500, 500);
      this.drawing = false;
    },
    erase(){
      this.ctx.strokeStyle = "white";
    },
    getRandomColor(){
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return (this.ctx.strokeStyle = color);
    }
  }
};
</script>

<style>
.canvas-wrap {
  border: 2px dashed #222222;
  border-radius: 10px;
  background: white;
  grid-area: canvas;
  margin: 2rem 0;
}

button {
  font-family: "Fredoka One", cursive;
  border: 2px solid #222222;
  -webkit-box-shadow: 5px 5px 0px 0px black;
  box-shadow: 5px 5px 0px 0px black;
  font-size: 1.2rem;
  padding: 10px 25px;
  margin: 5px;
  text-transform: uppercase;
  background-color: #f0df45;
}

button:hover,
button:focus {
  -webkit-box-shadow: 0px 0px 0px 0px black;
  box-shadow: 0px 0px 0px 0px black;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}


.draw-options {
  display: flex;
  flex-direction: column;
  grid-area: color;
  margin-top: 2rem;
  margin-right: 1rem;
}

.draw-options label {
  padding-right: 5px;
}

.settings-canvas-grid {
  display: grid;
  gap: 2px;
  grid-template-rows: auto;
  grid-template-areas: 
  "color canvas canvas gallery"
  "color canvas canvas gallery";
}

.color-selection {
  padding: 0;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  border: none;
  outline: none;
  -webkit-apperance: none;
}

.color-selection::-webkit-color-swatch {
  border: none;
  border-radius: 100%;
}

/*for firefox or it looks like the eye of sauron*/
.color-selection::-moz-color-swatch {
  border: none;
  border-radius: 100%;
}
</style>
