<template>
  <div style="padding: 16px;">
    <g-collapse :selected.sync="selectedTab" single>
      <g-collapse-item title="标题1" name="1">hello，你好呢。</g-collapse-item>
      <g-collapse-item title="标题2" name="2">你知道我在想你吗?</g-collapse-item>
      <g-collapse-item title="标题3" name="3">我在等你呀!</g-collapse-item>
    </g-collapse>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
  import GCollapseItem from '../../../src/collapse-item'
  import GCollapse from '../../../src/collapse'
  export default {
    components: {GCollapse, GCollapseItem},
    data() {
      return {
        selectedTab: ['1']
      }
    },
  }

</script>