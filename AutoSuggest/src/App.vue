<template>
  <div id="app">
    <AutoSuggest></AutoSuggest>
  </div>
</template>

<script>
import AutoSuggest from './components/AutoSuggest';

export default {
  name: 'app',
  components: {
    AutoSuggest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
