#!/usr/bin/env node
async function start() {
  // 如果需要手动修改anonymous_token，需要注释generateConfig调用
  require('./server').serveNcmApi({
    checkVersion: true,
  })
}
start()

const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes');  // 导入API路由

const app = express();

// 设置CORS中间件
app.use(cors({
  origin: 'https://music.minterjia.com' // 允许访问的域名，可以是字符串或字符串数组
}));

// 添加API路由
app.use('/', apiRoutes);

// 启动API服务
app.listen(3000, () => {
  console.log('API服务已启动');
});
