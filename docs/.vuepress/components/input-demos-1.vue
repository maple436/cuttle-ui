<template>
  <div style="padding: 20px">
    <g-input v-model="value"></g-input>
    <p>value: {{value}}</p>
  </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    data() {
      return {
        value: '双向绑定'
      }
    },
    components:{
      'g-input':Input,
    }
  }
</script>