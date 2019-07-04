## 项目简介

    基于React+AntD+TypeScript的后台管理系统

## 技术依赖
- 主体：React、TypeScript、AntD
- 图表：BizChart
- Excel：js-xlsx
- 图片生成：html2canvas
- 富文本编辑器：Tinymce
- 数据：axios

[线上地址](https://wluyao.github.io/admin/dist/index.html)  

## 功能

- 登录/退出

- 全屏浏览

- 一键换肤

- 个人中心

- 侧边菜单

- 标签快捷导航

- 图标

- 表单

- 表格

- 图表

  - 折线图
  - 面积图
  - 柱状图
  - 条形图
  - 饼图
  - 散点图

- 地图
- Tab选项卡

- 上传/导出Excel

- 用户管理

- 文章管理
  - 创建文章
  - 文章列表
  - 草稿箱
  - 垃圾箱

- 上传
  - 头像上传
  - 文件上传

- 错误处理
  - 403
  - 404

- 其他功能
  - 返回顶部
  - 

##  项目截图




## 目录结构

```
|-- config					            webpack配置文件
|-- dist								webpack构建目录
|-- public					            入口页面
|-- shortcut							项目截图
|-- src									源码目录
|	|-- api									接口
|	|-- assets								静态资源文件，会被webpack解析为模块依赖
|		|-- img									图片
|	|-- components                      	公共组件
|	|-- layout								布局
|	|-- mock								模拟数据
|	|-- pages								页面级组件	
|	|-- main.js								入口文件，加载各种组件
|	|-- router							    路由管理	
|	|-- store							    状态管理	
|	|-- styles							    全局样式	
|	|-- utils								全局公用方法	
|	|-- App.tsx								根组件
|	|-- index.tsx							入口文件
|-- .babelrc							babel-loader 配置
|-- .editorconfig					    vscode配置
|-- .gitignore							git提交时忽略的文件
|--	package.json						项目基本信息
|-- README.md							项目说明
|-- tsconfig.json						TypeScript配置
```



## 使用

### 运行

```
npm run dev
```

###  构建

```
npm run build
```
