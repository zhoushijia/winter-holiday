<template>
  <div>
    <hr />
    儿子1组件
    <div>儿子1的姓名：{{ s1name }}</div>
    <div>媳妇1的姓名：<input type="text" v-model="wife1name" @input="$emit('wife1', wife1name)" /></div>
    <div>儿子1母亲姓名:{{ mothername }}</div>
    <hr />
  </div>
</template>
<script>
export default {
  name: 'Son1',
  props: ['mothername'],
  data() {
    return {
      s1name: '儿子1',
      wife1name: ''
    }
  }
}
</script>
