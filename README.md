## 轻旅项目说明

### 运行

```bash
yarn serve
```

### 打包

```bash
yarn build
```

### 文件结构

public/mock —— mock的数据

src  
---- assets/style —— 公共样式  
-------- iconfont —— 字体图标  
-------- border.css —— 伪元素边框样式  
-------- mixins.styl —— 需要混入的样式  
-------- reset.css —— 适合手机端的样式  
-------- varibles.styl —— 全局变量样式  
---- common —— 通用组件  
-------- Fade/Fade.vue —— 透明渐变动画  
-------- Gallery/Gallery.vue —— 图片预览  
---- components  
-------- City —— 城市组件  
------------ Alphabet.vue —— 字母导航  
------------ Header.vue —— 顶部  
------------ List.vue —— 地址列表  

