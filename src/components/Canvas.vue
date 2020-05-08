<template>
  <div class="settings-canvas-grid">
    <div class="canvas-wrap" id="canvas-wrap">
      <canvas id="canvas" class="draw" @mousedown="startDrawing" @mouseup="stopDrawing" @mousemove="draw" height="500" width="500" ref="canvas"></canvas>
    </div>

    <div class="draw-options">
      <button class="pencil" id="pencil">
        <label for="color-selection">Pencil </label
        ><input
          name="color-selection"
          type="color"
          id="color-selection"
          class="color-selection"
        />
      </button>
      <button class="eraser" id="eraser">
        Eraser
      </button>
      <button class="random-color" id="random-color">
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
      points: [],
    }
  },
  mounted(){
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.lineWidth = 10;
    this.ctx.lineCap ="round";
    this.ctx.lineJoin = "round";

    // this.ctx.canvas.width = 500;
    // this.ctx.canvas.height = 500;
    // if (window.innerWidth < 500) {
    //   this.ctx.canvas.width = window.innerWidth -10;
    //   this.ctx.canvas.height = window.innerWidth -10;
    // }

  // console.log(this.canvas.height)
  // console.log(this.canvas.width )
  // console.log(this.canvas.getBoundingClientRect().width)
    
  //   const drawWindow = getComputedStyle(this.canvas);
  //   this.canvas.height = parseInt(drawWindow.getPropertyValue("width"));
  //   this.canvas.width = parseInt(drawWindow.getPropertyValue("height"));
  //   this.ctx.fillRect(498, 498, this.canvas.width, this.canvas.height);
    
  },
  methods: {
    startDrawing(e){

      var rect = this.canvas.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;

      this.startX = x;
      this.startY = y;

      this.points.push({
        x: x,
        y: y
      });

      this.drawing = true;
      this.draw(e);
      
    },
    stopDrawing(){
      this.drawing = false;
      this.ctx.beginPath()

    },
    draw(e){
      var rect = this.canvas.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;

      if(!this.drawing) return;

      this.ctx.lineTo(x, y);
      this.ctx.stroke()

      this.ctx.beginPath()
      this.ctx.moveTo(this.startX, this.startY);

      this.startX = x;
      this.startY = y;

      this.points.push({
        x: x,
        y: y
      });


    },
    clear(){
      this.ctx.clearRect(0, 0, 500, 500);
    }
  }
};
</script>

<style>
.canvas-wrap {
  border: 2px dashed #222222;
  border-radius: 10px;
  /* width: 500px;
  height: 500px; */
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
