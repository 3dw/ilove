<template>
  <div class="about">
    <h1>義賣</h1>
    <h4>電話：03-9232209  手機：0972-935-839</h4>
    <div class="ui four doubling cards">
        <div class="ui card" v-for = "i in items" :key="i.t">
            <h3 class="ui header">
              <a href="i.u">{{ i.t }} ─ {{ i.p }}</a>
            </h3>
            <div v-if="i.i" class="image">
              <a :href="i.u || './img/' + i.i" target="_blank">
                 <div class="img" :style="{ 'background-image': 'url(./img/' + i.i + ')' }" />
              </a>
            </div>
            <h3 class="ui header">
              <a href="i.u">{{ i.t }} ─ {{ i.p }}</a>
            </h3>
            <p class="description">
              {{ i.d }}
              <span v-if="i.imgs">
                <img v-for = "m in i.imgs" :src="'./img/' + m" :key="m"/>
              </span>
            </p>
        </div>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'Sell',
  data () {
    return {
        items: [
            {t: '人體圖', u: 'https://www.facebook.com/%E6%82%A8%E8%88%87%E6%82%A8%E7%9A%84%E4%BA%BA%E9%AB%94%E5%9C%96-101440878017380/', p: '$NTD500', d: '這是一個專為宇宙存有所設的粉絲專頁，這裡會根據您的部分畫出現在的狀況及您要做的事情。 在這張圖裡您可以看到自己目前的進度與未來的任務，將會一一實現。', i:'human_pic.jpg'},
            {t: '繁星點點', u: null, p: '$2800', d: '木製檯燈', i:'wood_art0.jpg'},
            {t: '百花蜜', u: null, p: '$600', d: '百花蜜', i:'百花蜜.jpg'},
            {t: '烏龍茶', u: null, p: '4兩$600', d: '烏龍茶', i:'烏龍茶.jpg'},
            {t: '豆腐乳', u: null, p: '$200', d: `我愛玩學校手作豆腐乳 
五種口味：

鳳梨口味
米醬口味 不辣
米醬口味 有辣
米醬加鳳梨 不辣
米醬加鳳梨 有辣
都是200元`, i:'豆腐乳.jpg'},
            {t: '逐夢踏實', u: null, p: '$8800', d: '', i:'逐夢踏實.jpg'},
            {t: '神木燈飾', u: null, p: '$202020', d: `身高300公分，腰圍120
鎮宅價202020`, i:'神木燈飾.jpg'},
            {t: '皂非皂', u: null, p: '$280', d: '特別的肥皂\n哪裡不舒服放哪裡, 一塊肥皂可全身使用, 洗澡,刷牙,卸妝,洗臉', i:'soap.jpg', imgs: ['soap1.jpg', 'soap2.jpg']},

        ]
    }
  }
}

</script>

<style type="text/css" scoped="">
  
img {
  width: 100%;
}

p {
  text-align: left;
}

.img {
  width: 100%;
  height: 40vmin;
  background-size: cover; 
  background-position: center;
}
</style>
