<template>
  <aside class="gallery-wrapper">
    <ul class="gallery-list">
      <li class="gallery-item vibrate" id="gallery">HELLOOOOOOOOOOOOOOOOOO</li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Gallery",
};
</script>

<style>
.gallery-wrapper {
  grid-area: gallery;
  border: 1px solid red;
}

.gallery-wrapper li {
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-template-rows: auto;
  margin: 2px;
}
</style>
