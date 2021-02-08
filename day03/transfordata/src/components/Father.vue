<template>
  <div>
    <div>父亲姓名：{{ name }}</div>
    <div>母亲姓名：<input type="text" v-model="mothername" /></div>
    <div>大儿子媳妇：{{ wife1 }}</div>
    <son1 :mothername="mothername" @wife1="getName"></son1>
    <son2 :mothername="mothername" :wife1="wife1"></son2>
  </div>
</template>
<script>
import Son1 from '../components/Son1'
import Son2 from '../components/Son2'
export default {
  name: 'Father',
  data: function() {
    return {
      name: '爸爸',
      mothername: '妈妈',
      wife1: ''
    }
  },
  methods: {
    getName(name) {
      this.wife1 = name
    }
  },
  components: {
    son1: Son1,
    son2: Son2
  }
}
</script>
