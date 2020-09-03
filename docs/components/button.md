---
 title:Button
---
# Button 按钮

## 基本用法
<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>

## 示例代码：

```vue
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
```

# ButtonGroup 按钮组合

横向排列的按钮组合
## 基本用法
<ClientOnly>
  <button-group-demos></button-group-demos>
</ClientOnly>

## 示例代码
```vue
<button-group>
      <g-button>选项一</g-button>
      <g-button>选项二</g-button>
      <g-button>选项三</g-button>
      <g-button>选项四</g-button>
</button-group>
```