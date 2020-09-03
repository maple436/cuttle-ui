---
 title:Grid
---
# Grid 网格
## 基本用法:
### 24网格
#### 预览
<grid-demos-1></grid-demos-1>

#### 示例代码:
```vue
<g-row class="demoRow">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>

    <g-row class="demoRow">
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>

    <g-row class="demoRow">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>

    <g-row class="demoRow">
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
    </g-row>
```

### 设置gutter
#### 预览
<grid-demos-2></grid-demos-2>

#### 代码示例:
```vue
<g-row class="demoRow" gutter="10">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>

    <g-row class="demoRow" gutter="10">
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>
```

### 设置空隙
##### 预览
<grid-demos-3></grid-demos-3>

#### 代码示例:
```vue
<g-row class="demoRow" gutter="10">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8" offset="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="6" offset="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6" offset="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="8">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
    </g-row>
```