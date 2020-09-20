<template>
  <div class="about">
    <h1>人物</h1>
    <div class="ui four doubling cards">
      <div class="ui card" v-for="p in people" :key="p.n">
        <div v-if="p.i" class="image">
          <a v-if="p.f" :href="p.f" target="_blank">
            <img :src="'./img/' + p.i" />
          </a>
        </div>
        <h1>{{ p.n }}</h1>
        <p class = "description" v-if="p.d">{{p.d}}</p>
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
            {n: '波哥', f: 'https://www.facebook.com/profile.php?id=100008017516957', i:'po.jpg'},
            {n: '波嫂', f: 'https://www.facebook.com/profile.php?id=100012476358849', i:'po_sau.jpg'},
            {n: '世銘', f: 'https://www.facebook.com/profile.php?id=100000216159690', i:'shi_ming.jpg'},
            {n: '士娟', f: 'https://www.facebook.com/profile.php?id=1681455094', i:'shi_juan.jpg'},
            {n: '春和', f: 'https://www.facebook.com/earthenLee', i:'chun_he.jpg'},
            {n: '秀麗', f: 'https://www.facebook.com/singsonglife', i:'show_lee.jpg', d: `稱號：酵長

經歷：

1、心賞環境管理/顧客
2、一個賣氧氣的女人/作者

辦校理念：
最近和一群有志之士，在宜蘭員山成立了一所「我 愛 玩」學校，我們選出了三位Tㄧㄠ丶長，一位是負責校正的「校長」；一位是負責起笑的「笑長」；而我是負責發酵的「酵長」，因為我們發覺我們這一群3、4、5年級的中古老人，都很不會玩，都把自己卡在名與利和時代動盪的恐懼之中，忘了去和天地合一，因此我們設計了許多好好玩的課程，讓自己的「波」融入「生命之花」結合太極螺旋之舞，用「拈花微笑」 讓來參與的人（老老少少）都能綻放自性光明，擁抱自己的本然。

我們都是來「𨑨迌」的，「我 愛 玩」學校，就是唱歌、跳舞而已，我們就是「光」，想哭就哭、想笑就笑，開啟天人合一的「全息宇宙」觀，自己調頻、自己轉台， 我們都在平行宇宙中穿梭，透過找到自己、療癒自己，也就療癒了地球。(love)(love)(love)

通訊錄資料：

名稱：許秀麗
電話：0935-373106
居住地：台中
興趣專長：拈花惹草/愛𨑨迌
產業別：花卉/園藝`}
        ]
    }
  }
}


</script>

<style type="text/css" scoped="">
	img {
    height: 200px;
	}

  p {
    text-align: left;
    white-space: pre-line;
  }
</style>