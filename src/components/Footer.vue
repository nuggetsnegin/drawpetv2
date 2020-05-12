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
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
}

a{
  text-decoration: none;
  color: rgb(241, 103, 126); 
  letter-spacing: 1px;
}

a:hover,
a:focus{
  font-weight: 900;
}

p{
  background: white;
  padding: 5px 0px;
  border-radius: 3px;
}
</style>