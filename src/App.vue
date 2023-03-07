<template>
  <Header></Header>
</template>
<script>
import Header from '@/components/header/header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
$color: #2c3e50;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $color;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
