<template>
  <div style="padding: 20px">
    <g-input placeholder="请输入内容"></g-input>
    <g-input value="默认内容"></g-input>
    <g-input disabled value="默认内容"></g-input>
    <div style="margin:20px 0">
      <g-input error="用户名不低于两个字"></g-input>
    </div>
  </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    components:{
      'g-input':Input,
    }
  }
</script>