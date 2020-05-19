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
        <button
          class="color-1 box"
          style="background: black"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-2 box"
          style="background: gray"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-3 box"
          style="background: red"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-4 box"
          style="background: orange"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-5 box"
          style="background: yellow"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-6 box"
          style="background: green"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-7 box"
          style="background: blue"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-8 box"
          style="background: purple"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-9 box"
          style="background: hotpink"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-10 box"
          style="background: white"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-11 box"
          style="background: lightsteelblue"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-12 box"
          style="background: saddlebrown"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-13 box"
          style="background: honeydew"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-14 box"
          style="background: lavenderblush"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-15 box"
          style="background: mediumslateblue"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-16 box"
          style="background: springgreen"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-17 box"
          style="background: salmon"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-19 box"
          style="background: turquoise"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-20 box"
          style="background: burlywood"
          @click="this.getQuickColor"
        ></button>
        <button
          class="color-21 box"
          style="background: beige"
          @click="this.getQuickColor"
        ></button>
      </div>

    <div class="pensize">
          <button class="pensize-small" style="padding: 5px" @click="this.getPenSize"></button>
          <button class="pensize-medium" style="padding: 10px" @click="this.getPenSize"></button>
          <button class="pensize-large" style="padding: 15px" @click="this.getPenSize"></button>
          <button class="pensize-xlarge" style="padding: 20px" @click="this.getPenSize"></button>
    </div>
  </div>
</template>
<script>
import firebase from "../../firebase";
import Swal from "sweetalert2";

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
    getQuickColor(e) {
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
    getPenSize(e){
      let penSize = (e.currentTarget.style.padding.replace("px", ""));
      this.ctx.lineWidth = penSize;
    },
    getCanvas() {
      /*src: https://stackoverflow.com/questions/17386707/how-to-check-if-a-canvas-is-blank*/
      const pixelBuffer = new Uint32Array(
        this.ctx.getImageData(0, 0, 500, 500).data.buffer
      );
      return !pixelBuffer.some((color) => color !== 0);
    },
    async save() {
      const storageRef = firebase.storage().ref();
      const id = this.generateID();
      /*save canvas image as data url (png format by default)*/
      const dataURL = this.canvas.toDataURL();

      if (!this.getCanvas(this.canvas.current)) {
        document.getElementById("save").disabled = false;
        await fetch(dataURL)
          .then((res) => res.blob())
          .then((res) => storageRef.child(id).put(res))
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: "Something broke..",
              icon: "error",
            });
            console.log(err);
          });
        Swal.fire({
          title: "Success!",
          text: "Drawing saved! Page will now reload.",
          icon: "success",
        });
        setTimeout(function() {
          location.reload(); /*reload page after canvas cleared*/
        }, 5000);

        return false;
      } else {
        Swal.fire({
          title: "Oops..",
          text: "Cannot save an empty canvas! 😢",
          icon: "warning",
        });
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
  border: 2px dashed #3D3B30;
  border-radius: 10px;
  background: white;
  grid-area: canvas;
  margin-top: 2rem;
  margin-right: 25px;
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
  background-color: #E7E247;
  color: #222222;
}

button:hover,
button:focus {
  -webkit-box-shadow: 0px 0px 0px 0px #3D3B30;
  box-shadow: 0px 0px 0px 0px #3D3B30;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.draw-options {
  display: flex;
  flex-direction: column;
  grid-area: color;
  width: 80%;
  margin-top: 2rem;
  margin-left: 20px;
}

.draw-options label {
  padding-right: 5px;
}

.settings-canvas-grid {
  display: grid;
  gap: 5px;
  grid-template-areas:
    "color canvas"
    "color canvas"
    "box canvas"
    ". pensize";
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

.quick-colors {
  grid-area: box;
  width: 200px;
  margin-left: 25px;
  margin-top: -100px;
}

.box{
  border-radius: 25px;
  padding: 10px;
  box-shadow: 2px 2px 0px 0px #3D3B30;
}

.pensize{
  background: none;
  border: none;
  box-shadow: none;
  grid-area: pensize;
  justify-self: flex-end;
  padding: 10px;
}

.pensize button{
  border-radius: 25px;
}


@media (max-width: 1160px){
  .settings-canvas-grid{
    min-height: 580px;
  }
}

@media (max-width: 880px) {
 .settings-canvas-grid{
   display: grid;
   grid-template-areas: 
   ". . pensize"
   " canvas canvas canvas"
   "color color box";
   gap: 10px;
  }

  .canvas-wrap{
      margin: 0 auto;
  }

  .quick-colors,
  .pensize{
    margin: 0 auto;
  }

  .quick-colors{
    margin-bottom: 10px;
  }


  .draw-options{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 10px auto;
  }

  button{
    border-radius: 25px;
    font-size: .8rem;
    padding: 5px 20px;
  }

  /* canvas{
    width: 300px;
    height: 300px;
  }

  .canvas-wrap{
    width: 300px;
    height: 300px;
  } */
}
</style>
