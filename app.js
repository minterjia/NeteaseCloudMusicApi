#!/usr/bin/env node
async function start() {
  // 如果需要手动修改anonymous_token，需要注释generateConfig调用
  require('./server').serveNcmApi({
    checkVersion: true,
  })
var app = express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://smusic.butterfly.top");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","POST,GET");//PUT,POST,GET,DELETE,OPTIONS
    next();
});
}
start()
