<template>
  <div id="app">
    <div id = "flower" :class = "{ big: bigFlower }"  v-touch:moving="move">
      <a id = "a" v-touch:tap = "() => go('/')" :class = "{ 'router-exact-active': this.$router.currentRoute.path === '/' }">首頁</a>
      <a id = "b" v-touch:tap = "() => go('/sell')" :class = "{ 'router-exact-active': this.$router.currentRoute.path === '/sell' }">義賣</a>
      <a id = "c" v-touch:tap = "() => go('/facebook')" :class = "{ 'router-exact-active': this.$router.currentRoute.path === '/facebook' }">臉書</a>
      <a id = "d" v-touch:tap = "() => go('/people')" :class = "{ 'router-exact-active': this.$router.currentRoute.path === '/people' }">人物</a>
      <a id = "e" v-touch:tap = "() => go('/activity')" :class = "{ 'router-exact-active': this.$router.currentRoute.path === '/activity' }">活動</a>
      <a id = "f" v-touch:tap = "() => go('/place')" :class = "{ 'router-exact-active': this.$router.currentRoute.path === '/place' }">場地</a>
      <a id = "life" @click = "bigFlower = !bigFlower">
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
// import FastClick from 'fastclick'

window.jQuery = $
// require('jquery-ui-touch-punch')

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
  methods: {
    go (r) {
      this.$router.push(r);
    },
    move (e) {
      if (window.parent === window) {
        var clientX = e.touches[0].clientX;
        var clientY = e.touches[0].clientY;
        console.log(clientX);
        console.log(clientY);
        $('#flower').css("left", clientX).css("top", clientY).css("z-index", 999);
      }
    }
  },
  mounted () {
    // $('#flower').draggable();
  }
} 

</script>

<style>

html, body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#view {
  width: 95vw;
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

#nav a.a-exact-active {
  color: #42b983;
}

#flower {
  position: fixed;
  z-index: 999;
  top: 12vh;
  right: 250px;
  transition: all .5s ease;
  transform: scale(1);
  transform-origin: 0 0;
}

#flower a {
  transition: all .5s ease;
  z-index: 999;  
  cursor: pointer !important;
  background-color: white;
  border-radius: 50%;
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
}

#life {
  background-color: transparent;
}

#flower img {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  border-radius: 50%;
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

a.router-exact-active {
  color: red;
}

iframe {
  z-index: -999;
}

</style>
