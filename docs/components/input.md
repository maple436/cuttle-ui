---
title:Input
---
# Input 输入框

## 基本用法:
<input-demos></input-demos>

### 示例代码:
```vue
<g-input placeholder="请输入内容"></g-input>
    <g-input value="默认内容"></g-input>
    <g-input disabled value="默认内容"></g-input>
    <div style="margin:20px 0">
      <g-input error="用户名不低于两个字"></g-input>
    </div>
```

## 双向绑定:
<input-demos-1></input-demos-1>
```vue
<script>
export default {
  data() {
    return {
      value: '双向绑定'
    }
  },
}
</script>

<g-input v-model="value"></g-input>
<p>value: {{value}}</p>
```