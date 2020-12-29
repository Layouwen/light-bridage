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
-------- Detail —— 详情页  
------------ Banner.vue —— 顶部的图片  
------------ Header —— 头部导航栏  
------------ List.vue —— 列表  
-------- Home —— 主页  
------------ Header.vue —— 头部  
------------ Icons.vue —— 分组导航  
------------ Recommend.vue —— 热销推荐  
------------ Swiper.vue —— 轮播  
------------ Weekend.vue —— 周末去哪儿

---- router —— 路由配置

---- store —— 数据仓库  
-------- actions —— 触发行为  
-------- index  
-------- mutations —— 行为  
-------- state —— 数据

---- views —— 页面  
-------- City.vue —— 城市页  
-------- Detail.vue —— 详情页  
-------- Home.vue —— 主页
