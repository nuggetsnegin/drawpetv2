/* eslint-disable vue/require-v-for-key */
<template>
  <aside class="gallery-wrapper">
    <ul class="gallery-list">
      <li class="gallery-item vibrate" id="gallery">
      </li>
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
    const node = document.createElement("LI");

    /* list all returns a list of all images*/
    const allImages = storageRef.listAll();
    /*grab all the images' download URLS from firebase storage and then call displayImage*/
    allImages.then(function(result) {
      result.items.forEach(function(imageRef) {
        imageRef.getDownloadURL().then(result => {
          const retrievedImage = result;
          const img = new Image(130, 130);
          img.src = retrievedImage;
          /*append image to dynamic li*/
          node.appendChild(img);
          /*append that li to the dom*/
          document.getElementById("gallery").appendChild(node);
        });
      });
    });
  },
};
</script>

<style>
/* .gallery-wrapper {
  grid-area: gallery;
  border: 1px solid red;
} */

.gallery-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  opacity: .7;
}
</style>
