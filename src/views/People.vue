<template>
  <div class="about">
    <h1>人物</h1>
    <div class="ui four doubling cards">
      <div class="ui card" v-for="p in people" :key="p.n">
        <a v-if="p.i" class="image" @click="p.more = !p.more">
          <!--<a v-if="p.f" :href="p.f" target="_blank"> -->
            <div class="img" :style="{ 'background-image': 'url(./img/' + p.i + ')' }" />
          <!-- </a> -->
        </a>
        <h1>{{ p.n }}</h1>
        <p class = "description" v-if="p.d">
          <span v-if = "p.more">{{p.d}}</span>
          <a v-else @click="p.more = true"> {{p.d.substr(0,20)}}...瞭解更多</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">


export default {
  name: 'people',
  data () {
    return {
        people: [
            {n: '波哥', f: 'https://www.facebook.com/profile.php?id=100008017516957', i:'po.jpg', more: false},
            {n: '波嫂', f: 'https://www.facebook.com/profile.php?id=100012476358849', i:'po_sau.jpg', more: false},
            {n: '世銘', f: 'https://www.facebook.com/profile.php?id=100000216159690', i:'shi_ming.jpg', more: false},
            {n: '士娟', f: 'https://www.facebook.com/profile.php?id=1681455094', i:'shi_juan.jpg', more: false},
            {n: '春和', f: 'https://www.facebook.com/earthenLee', i:'chun_he.jpg', more: false},
            {n: '秀麗', f: 'https://www.facebook.com/singsonglife', i:'show_lee.jpg', more: false, d: `稱號：酵長

經歷：

1、心賞環境管理/顧客
2、一個賣氧氣的女人/作者

辦校理念：
最近和一群有志之士，在宜蘭員山成立了一所「我 愛 玩」學校，我們選出了三位Tㄧㄠ丶長，一位是負責校正的「校長」；一位是負責起笑的「笑長」；而我是負責發酵的「酵長」，因為我們發覺我們這一群3、4、5年級的中古老人，都很不會玩，都把自己卡在名與利和時代動盪的恐懼之中，忘了去和天地合一，因此我們設計了許多好好玩的課程，讓自己的「波」融入「生命之花」結合太極螺旋之舞，用「拈花微笑」 讓來參與的人（老老少少）都能綻放自性光明，擁抱自己的本然。

我們都是來「𨑨迌」的，「我 愛 玩」學校，就是唱歌、跳舞而已，我們就是「光」，想哭就哭、想笑就笑，開啟天人合一的「全息宇宙」觀，自己調頻、自己轉台， 我們都在平行宇宙中穿梭，透過找到自己、療癒自己，也就療癒了地球。(love)(love)(love)

興趣專長：拈花惹草/愛𨑨迌
產業別：花卉/園藝`}
        ]
    }
  }
}


</script>

<style type="text/css" scoped="">

  p {
    text-align: left;
    white-space: pre-line;
  }

  .description {
    padding: 0 .6em;
  }

  .img {
    width: 100%;
    height: 40vmin;
    background-size: cover; 
    background-position: center;
  }
</style>