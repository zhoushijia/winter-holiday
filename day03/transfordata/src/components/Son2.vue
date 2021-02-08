<template>
  <div>
    <hr />
    儿子2组件
    <div>儿子2的姓名：{{ s2name }}</div>
    <div>儿子2母亲姓名:{{ mothername }}</div>
    <div>儿子2大嫂姓名:{{ wife1 }}</div>
    <hr />
  </div>
</template>
<script>
export default {
  name: 'Son2',
  props: ['mothername', 'wife1'],
  data() {
    return {
      s2name: '儿子2'
    }
  }
}
</script>
