<template>
  <div class="home">
    <HelloWorld msg="我愛玩學校" @nav = "nav()"/>
    <p>我是誰？是為了 體驗自己 我 而創造
    <br/>玩 是宇宙唯一的事 是心事 我是誰？
    <br/>是為了 體驗自己 我 而創造
    <br/>
    <br/>我一個 沒辦法體驗 所以創造 妳
    <br/>我愛上了妳 所以生了他 以至無限 我們</p>
    <br/>
    <p>愛 是源頭創造的情緒能量 無條件之愛</p>
    <br/>
    <p>玩 是宇宙唯一的事 是心事</p>
    <br/>
    <p>學 裡有子 上有2乂 乂是五 得10 方 可玩
    <br/>學 裡有 覺 有見即光 有光即有影 有相</p>
    <br/>
    <p>校 調教準 喜悅興奮 是關鍵羅盤指南針</p>
    <br/>
    <h1><a @click="nav()">我愛玩學校</a></h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    nav () {
      this.$emit('nav')
    }
  }
}
</script>

<style type="text/css" scoped="">

p::first-letter {
    color: red;
    font-size: 2em;
}

h3 {
    color: red;
    font-size: 2em;
}

a {
    color: red;
    text-decoration: none;
}

</style>
