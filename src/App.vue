<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/about">理念</router-link> |
      <router-link to="/facebook">臉書</router-link> |
      <router-link to="/sell">義賣</router-link>
    </div>
    <router-view/>
    <div id = "flower" class="float">
      <router-link to="/">
        <img src="./assets/flower.svg"/>
      </router-link>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  cursor: pointer !important;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#flower {
  position: fixed;
  bottom: 5vh;
  left: 5vw;
}
#flower img {
  width: 100px;
  height: 100px;
  cursor: pointer !important;
}
</style>
