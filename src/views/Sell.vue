<template>
  <div class="about">
    <div class="ui list">
        <div class="item" v-for = "i in items" :key="i">
            {{ i }} -- $NTD2000
        </div>
    </div>
  </div>
</template>

<script type="text/javascript">


export default {
  name: 'Home',
  data () {
    return {
        items: [
            'test1',
            'test2',
            'test3',
            'test4',
            'test5',
            'test6',
            'test7'
        ]
    }
  }
}

</script>
