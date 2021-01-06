<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2F3dw.github.io%2Filove%2F%23%2F&layout=button_count&size=large&appId=485195848253155&width=80&height=28" width="80" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" title="facebook"></iframe>
    <br/>
    <a @click="nav()">
      <img src="../assets/main2.jpg" alt="ilove">
    </a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    nav () {
      this.$emit('nav')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 60vmin;
}
</style>
