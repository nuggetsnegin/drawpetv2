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
</style>