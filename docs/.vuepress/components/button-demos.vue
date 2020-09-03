<template>
  <div style="padding: 20px">
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button  :loading="true" @click="loading=!loading">默认按钮</g-button>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  import buttonGroup from '../../../src/button-group'

  export default {
    components:{
      'g-button':Button,
      'button-group':buttonGroup,
    }
  }
</script>