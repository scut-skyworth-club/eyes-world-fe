# eyes-world-fe

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 前端从后端取数据

**注意：**fetch 的请求网址为后端接口，不同页面可能有不同的接口，具体请参考接口文档 [https://github.com/eyes-world/eyes-world-api/blob/master/api.md](https://github.com/eyes-world/eyes-world-api/blob/master/api.md)

```js
// 代码示例
fetch('http://39.108.149.106/login/tv/login', {
  mode: 'cors',
  method: 'POST',
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
  },
  credentials: "include",
  body: 'marker=' + this.marker
}).then(function(response) {
  return response.json();
}).then(function(getData) {
  // getData (可自己命名) 即为从后端收到的 JSON 数据, 可直接使用
})

```

具体也可以参考 login.vue 

## 获取数据测试

请先在 ``` localhost:{你的端口号}/#/login ``` (最好在新建标签页里输入此地址) 下点击链接,输入

| 用户名 | 密码 |
|------|------|
| mike | 123 |

进行登录,然后点击 <登录> 按钮,然后回到你的原工程网页,刷新,便可以获取到后端数据