<template>
  <aside class="gallery-wrapper">
    <ul class="gallery-list">
      <li class="gallery-item vibrate" id="gallery"></li>
    </ul>
  </aside>
</template>

<script>
import firebase from "../../firebase";

export default {
  name: "Gallery",
  mounted(){
    // Create a root reference
    const storageRef = firebase.storage().ref();
    /* list all returns a list of all images*/
    const allImages = storageRef.listAll();
    /*grab all the images' download URLS from firebase storage and then call displayImage*/
    allImages.then(function(result) {
      result.items.forEach(function(imageRef) {
        imageRef.getDownloadURL().then(result => {
          const retrievedImage = result;
          const img = new Image(130, 130);
          img.src = retrievedImage;
        });
      });
    });
  },
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
