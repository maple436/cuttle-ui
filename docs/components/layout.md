---
 title:Layout
---
# Layout 布局

## 布局

### 预览
<ClientOnly>
  <layout-demos-1></layout-demos-1>
</ClientOnly>


### 示例代码:
```vue
<g-layout style="color: white; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>

```

## 布局

### 预览
<ClientOnly>
  <layout-demos-2></layout-demos-2>
</ClientOnly>

### 示例代码:
```vue
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-layout>
        <g-sider style="height: 100px; background:rgb(61,170,252); width:200px; color: white;">
          sider
        </g-sider>
        <g-content style="height: 100px; background:deepskyblue;">
          content
        </g-content>
      </g-layout>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>
```

## 布局

### 预览
<ClientOnly>
  <layout-demos-3></layout-demos-3>
</ClientOnly>

### 示例代码:
```vue
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-sider style=" background:rgb(61,170,252); width:200px; color: white;">
        sider
      </g-sider>
      <g-layout>
        <g-header style="height: 50px; background:lightskyblue;">
          header
        </g-header>
        <g-content style="height: 100px; background:deepskyblue;">
          content
        </g-content>
        <g-footer style="height: 50px; background:lightskyblue;">
          footer
        </g-footer>
      </g-layout>
    </g-layout>
```