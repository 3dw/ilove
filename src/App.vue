<template>
  <div id="app">
    <div id = "flower" :class = "{ big: bigFlower }">
      <router-link id = "a" to="/">首頁</router-link>
      <router-link id = "b" to="/sell">義賣</router-link>
      <router-link id = "c" to="/facebook">臉書</router-link>
      <router-link id = "d" to="/people">人物</router-link>
      <router-link id = "e" to="/activity">活動</router-link>
      <router-link id = "f" to="/place">場地</router-link>
      <a @click = "bigFlower = !bigFlower">
        <img src="./assets/flower.svg"/>
      </a>
    </div>
    <div id ="view">
      <router-view @nav = "bigFlower = !bigFlower"/>
    </div>
  </div>
</template>

<script type="text/javascript">

import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'

export default {
  name: 'App',
  data () {
    return {
        bigFlower: false
    }
  },
  watch: {
    $route() {
      this.bigFlower = false;
    }
  },
  mounted () {
    $('#flower').draggable();
  }
} 

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#view {
  width: 100vw;
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
  z-index: 999;
  top: 5vh;
  right: 150px;
  transition: all .5s ease;
  transform: scale(1);
  transform-origin: center;
}

#flower a {
  transition: all .5s ease;
  z-index: 999;  
  cursor: pointer !important;
}

#flower.big {
  transform: scale(2);
  opacity: 1;
  background-color: white;
  border-radius: 50%;
}

#flower:hover {
  opacity: 1;
  background-color: white;
  border-radius: 50%;
}

#flower:hover a, #flower.big a {
  padding: 3px;
  background-color: white;
  border-radius: 50%;
}

#flower img {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
}

#a {
  position: absolute;
  top: -25px;
  left: 25px;
  width: 3em;
}

#b {
  position: absolute;
  top: 66px;
  left: 90px;
  width: 3em;
}

#c {
  position: absolute;
  top: 66px;
  left: -35px;
  width: 3em;
}

#d {
  position: absolute;
  top: 100px;
  left: 25px;
  width: 3em;
}

#e {
  position: absolute;
  top: 15px;
  left: -35px;
  width: 3em;
}

#f {
  position: absolute;
  top: 15px;
  left: 90px;
  width: 3em;
}

a {
  text-decoration: none;
  color: blue;
}

a.router-link-exact-active {
  color: red;
}

</style>
