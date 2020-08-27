<template>
  <div class="about">
    <h1>義賣</h1>
    <div class="ui cards">
        <div class="ui card" v-for = "i in items" :key="i.t">
            <h3 class="ui header">
              <a href="i.u">{{ i.t }} -- {{ i.p }}</a>
            </h3>
            <div v-if="i.i" class="image">
              <a :href="i.u" target="_blank">
                <img :src="'./img/' + i.i" />
              </a>
            </div>
            <p class="description">
              {{ i.d }}
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
            {t: '人體圖', u: 'https://www.facebook.com/%E6%82%A8%E8%88%87%E6%82%A8%E7%9A%84%E4%BA%BA%E9%AB%94%E5%9C%96-101440878017380/', p: '$NTD500', d: '這是一個專為宇宙存有所設的粉絲專頁，這裡會根據您的部分畫出現在的狀況及您要做的事情。 在這張圖裡您可以看到自己目前的進度與未來的任務，將會一一實現。', i:'human_pic.jpg'}
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

</style>
