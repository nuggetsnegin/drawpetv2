<template>
  <div class="settings-canvas-grid">
    <div class="canvas-wrap" id="canvas-wrap">
      <canvas
        id="canvas"
        class="draw"
        @mousedown="startDrawing"
        @mouseup="stopDrawing"
        @mousemove="draw"
        height="500"
        width="500"
        ref="canvas"
      ></canvas>
    </div>

    <div class="draw-options">
      <button class="pencil" id="pencil">
        <label for="color-selection">Color </label
        ><input
          name="color-selection"
          type="color"
          class="color-selection"
          @change="this.getColor"
        />
      </button>
      <button class="eraser" id="eraser" v-on:click="erase">
        Eraser
      </button>
      <button
        class="random-color"
        id="random-color"
        v-on:click="getRandomColor"
      >
        ???
      </button>
      <button class="clear" id="clear" v-on:click="clear">Clear</button>
      <button class="save" id="save" v-on:click="save">Save</button>
    </div>

    <div class="quick-colors" id="colors">
      <button class="color-1 box" style="background: #01BAEF" @click="this.getQuickColor"></button>
      <button class="color-2 box" style="background: rgb(228, 129, 231)" @click="this.getQuickColor"></button>
      <button class="color-3 box" style="background:rgb(106, 202, 130)" @click="this.getQuickColor"></button>
      <button class="color-4 box" style="background:rgb(240, 237, 99)" @click="this.getQuickColor"></button>
      <button class="color-5 box" style="background:rgb(139, 66, 207)" @click="this.getQuickColor"></button>
      <button class="color-6 box" style="background: rgb(112, 110, 235)" @click="this.getQuickColor"></button>
      <button class="color-7 box" style="background:rgb(232, 120, 68)" @click="this.getQuickColor"></button>
      <button class="color-8 box" style="background:rgb(240, 72, 86)" @click="this.getQuickColor"></button>
       <button class="color-9 box" style="background: #0B4F6C" @click="this.getQuickColor"></button>
     <button class="color-10 box" style="background: #1E3231" @click="this.getQuickColor"></button>
      <button class="color-11 box" style="background: #5B5941" @click="this.getQuickColor"></button>
      <button class="color-12 box" style="background: #2C2C54" @click="this.getQuickColor"></button>
      <button class="color-13 box" style="background: #DABECA" @click="this.getQuickColor"></button>
      <button class="color-14 box" style="background: #D3D4D9" @click="this.getQuickColor"></button>
      <button class="color-15 box" style="background: #C6DEA6" @click="this.getQuickColor"></button>
      <button class="color-16 box" style="background: #DDFDFE" @click="this.getQuickColor"></button>
      <button class="color-17 box" style="background: #FFFEFF" @click="this.getQuickColor"></button>
      <button class="color-19 box" style="background: #315659" @click="this.getQuickColor"></button>
      <button class="color-20 box" style="background: #FF01FB" @click="this.getQuickColor"></button>
      <button class="color-21 box" style="background: #26C485" @click="this.getQuickColor"></button>
    </div>
  </div>
</template>

<script>
import firebase from "../../firebase";

export default {
  name: "Canvas",
  data: function() {
    return {
      canvas: null,
      ctx: null,
      drawing: false,
      startX: 0,
      startY: 0,
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.lineWidth = 10;
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
  },
  methods: {
    startDrawing(e) {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      this.startX = x;
      this.startY = y;

      this.drawing = true;
      this.draw(e);
    },
    stopDrawing() {
      this.drawing = false;
      this.ctx.beginPath();
    },
    draw(e) {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (!this.drawing) return;

      this.ctx.lineTo(x, y);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(this.startX, this.startY);

      this.startX = x;
      this.startY = y;
    },
    getColor(e) {
      const color = e.currentTarget.value;
      this.ctx.strokeStyle = color;
    },
    getQuickColor(e){
      const color = e.currentTarget.style.backgroundColor;
      this.ctx.strokeStyle = color;
    },
    clear() {
      this.ctx.clearRect(0, 0, 500, 500);
      this.drawing = false;
    },
    erase() {
      this.ctx.strokeStyle = "white";
    },
    getRandomColor() {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return (this.ctx.strokeStyle = color);
    },
    getCanvas(){
      /*src: https://stackoverflow.com/questions/17386707/how-to-check-if-a-canvas-is-blank*/
      const pixelBuffer = new Uint32Array(
        this.ctx.getImageData(0, 0, 500, 500).data.buffer
      );
      return !pixelBuffer.some((color) => color !==0);
    },
    async save() {
      // const blankCanvas = document.getElementById("blank").toDataURL();
      const storageRef = firebase.storage().ref();
      const id = this.generateID();
      /*save canvas image as data url (png format by default)*/
      const dataURL = this.canvas.toDataURL();

      if(!this.getCanvas(this.canvas.current)){
        document.getElementById("save").disabled = false;
        await fetch(dataURL)
          .then((res) => res.blob())
          .then((res) => storageRef.child(id).put(res))
          .catch((err) => {
            console.log(err);
          });
        location.reload(); /*reload page after canvas cleared*/
        return false;
      }
      else{
        console.log('blank canvas')
      }
    },
    /*create random id for fb storage*/
    generateID() {
      let id = Math.random()
        .toString(36)
        .substring(7);
      return id;
    },
  },
};
</script>

<style scoped>
.canvas-wrap {
  border: 2px dashed #222222;
  border-radius: 10px;
  background: white;
  grid-area: canvas;
  margin: 2rem 0;
  width: 500px;
  height: 500px;
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
  z-index: 2;
  display: grid;
  gap: 5px;
  grid-template-rows: auto;
  grid-template-areas:
    "color canvas canvas"
    "color canvas canvas"
    "box box box";
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

.box {
  width: 10px;
  height: 10px;
}

.quick-colors {
  grid-area: box;
  width: 650px;
}
</style>
