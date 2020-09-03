---
title: 快速上手
---

# 快速上手

## npm安装
```sh
npm i x -S
```
## 开始使用
1.css样式
在使用 UI 时，您需要使用 border-box 盒模型，否则会影响样式，代码示例：
```css
 *, *::before, *::after {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }
```
IE8及以上浏览器都支持此样式
2.引入 UI
```js
 import {Button, ButtonGroup, Icon} from 'gulu-ui-one-hahaha'
      import 'gulu-ui-one-hahaha/dist/index.css'
    
      export default {
        name: 'app',
        components: {
          'g-button': Button,
          'g-icon': Icon
        }
      }
```