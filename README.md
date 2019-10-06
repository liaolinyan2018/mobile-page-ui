## 记第一次完整的做移动端页面 UI 1.0

### 移动端页面制作知识储备

- flex 布局
- 负 margin 增加元素宽度
- 媒体查询 做响应式
- meta 标签 禁止缩放
- 移动端适配（动态 REM 自适应布局）
- 移动端设备特点

### PC 页面制作 与 移动页面制作不同

移动页面需要做成响应式(Responsive)页面, 比 PC 制作页面多了几个步骤：媒体查询 + meta 标签 + 移动端适配（动态 REM）。并且**PC 页面制作更多考虑浏览器的兼容性**，若要兼容 IE, 不能使用 flex 布局、rem 和一些 CSS3 属性，只能使用 float 布局 + 负 margin。

## 更新 1.1

- 放弃使用 媒体查询，改为写两套 HTML + CSS
- 先写移动 UI, 使用 flex 布局 + 负 margin + 动态 rem 自适应方案。
- 移动 UI 制作注意：
  - 单位使用：数字大使用 rem , 像 border 和 文字的 font-size 要用 px，移动端做动态 REM 布局，完全可以抛弃 百分比，照着一份设计稿单位直接使用 px，然后借助工具进行单位转换：px -> rem 。
  - 使用了 rem 布局后，width/height/margin/padding/left/top 都使用 rem 单位
  - 移动和 PC 都不使用 em 单位。
  - 关于图片：icon 用 svg ,大的背景图用 .jpg + div 的 background-image。
  - px -> rem ,工具很多自己百度, 如 编写 scss 函数，vscode 的动态转换，各有优缺，总之还是多了单位转换一步，希望 各大浏览器 早点接受 vw 单位  
