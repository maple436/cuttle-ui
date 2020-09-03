<template>
  <div style="padding: 20px">
    <button-group>
      <g-button>选项一</g-button>
      <g-button>选项二</g-button>
      <g-button>选项三</g-button>
      <g-button>选项四</g-button>
    </button-group>
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