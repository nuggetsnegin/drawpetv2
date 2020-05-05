<template>
    <div class="settings-canvas-grid">
        <div class="canvas-wrap" id="canvas-wrap">
            <canvas id="draw" class="draw"></canvas>
        </div>

        <div class="draw-options">
            <button class="pencil" id="pencil">
                    <label for="color-selection">Pencil:</label
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
            <button class="clear" id="clear">Restart</button>
            <button class="save" id="save">Save</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Canvas',
}
</script>

<style scoped>
.canvas-wrap {
  border: 2px dashed #222222;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  background: white;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 2;
  -ms-grid-column-span: 2;
  grid-area: canvas;
}

button {
  border: 2px solid #222222;
  -webkit-box-shadow: 5px 5px 0px 0px black;
          box-shadow: 5px 5px 0px 0px black;
  font-size: 1.2rem;
  padding: 10px 25px;
  margin: 5px;
  text-transform: uppercase;
  background-color: #f0df45;
}

button:hover, button:focus {
  -webkit-box-shadow: 0px 0px 0px 0px black;
          box-shadow: 0px 0px 0px 0px black;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.draw {
  /*might prevent mobile drawing to prevent refresh, scrolling or pinching gestures not 10000% sure tho*/
  -ms-touch-action: none;
      touch-action: none;
}

.draw-options {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: color;
  margin-top: 2rem;
  margin-right: 1rem;
}

.draw-options label {
  padding-right: 5px;
}

.settings-canvas-grid {
  display: -ms-grid;
  display: grid;
  gap: 2px;
  -ms-grid-columns: (min-content)[4];
      grid-template-columns: repeat(4, -webkit-min-content);
      grid-template-columns: repeat(4, min-content);
  -ms-grid-rows: auto;
      grid-template-rows: auto;
      grid-template-areas: "color canvas canvas gallery" "color canvas canvas gallery";
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