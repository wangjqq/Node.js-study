// 导入 express
const express = require('express')
// 创建服务器实例
const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 必须在配置cors中间件之前.配置JSONP的接口
app.get('/api/jsonp', (req, res) => {
  // TODO:定义JSONP接口具体的实现过程
})

// 一定要在路由之前,配置cors这个中间件,从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./20.apiRouter')
// 把路由模块,注册到app上
app.use('/api', router)

// 启动服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})
