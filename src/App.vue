<template>
  <div id="app">
    <div class="messages" v-if="$root.messages.length > 0">
      <ul>
        <li v-for="message in $root.messages">{{ message }}</li>
      </ul>
    </div>

    <div class="errors" v-if="$root.errors.length > 0">
      <ul>
        <li v-for="error in $root.errors">{{ error }}</li>
      </ul>
    </div>

    <a href="http://hacksu.com"><img src="./assets/hacksu-logo.png"></a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

img {
  width: 100%;
  max-width: 30vw;
  margin-top: 3em;
  margin-bottom: 1em;
}

ul, hr, .flex-row, form {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.messages, .errors {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #63C588;
  color: white;
  padding: 1em;
  text-align: center;
}

.errors {
  background-color: tomato;
}
</style>
