<template>
  <div class="about">
    <div class="ui six doubling cards">
      <div class="ui card" v-for="p in people" :key="p.n">
        <div v-if="p.i" class="image">
          <a v-if="p.f" :href="p.f" target="_blank">
            <img :src="'./img/' + p.i" />
          </a>
        </div>
        <h1>{{ p.n }}</h1>
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
            {n: '春和', f: 'https://www.facebook.com/earthenLee', i:'chun_he.jpg'}
        ]
    }
  }
}


</script>

<style type="text/css" scoped="">
	img {
		width: 100%;
	}
</style>