---
 title:Tabs
---
# Tabs

## 基本用法
<ClientOnly>
    <tabs-demo-1></tabs-demo-1>
</ClientOnly>

### 示例代码:
```vue
<script>
export default {
    data(){
      return {
        selected:'1'
      }
    } 
}
</script>
<g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">tab 1</g-tabs-item>
        <g-tabs-item name="2">tab 2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
```

### 禁用状态
<ClientOnly>
    <tabs-demo-2></tabs-demo-2>
</ClientOnly>
 
 ### 示例代码:
 ```vue

 <script>
 export default {
     data(){
       return {
         selected:'1'
       }
     } 
 }
 </script>
<g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">tab 1</g-tabs-item>
        <g-tabs-item name="2">tab 2</g-tabs-item>
        <g-tabs-item name="3" disabled></g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
```