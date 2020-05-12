<template>
    <footer><p>🌟<a href="https://negi.dev/" target="_blank">Negin Melina Sauermann</a> &copy; 2020🌟</p></footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer {
  color: #3D3B30;
  font-size: 1.3rem;
  text-align: center;
  text-transform: uppercase;
  margin-top: -10px;
  padding: 5px;
}

a{
  text-decoration: none;
  color: #E7E247;
  -webkit-text-stroke: 1px #3D3B30;
  letter-spacing: 1px;
}

a:hover,
a:focus{
  font-weight: 900;
}

</style>