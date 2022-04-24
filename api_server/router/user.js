const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const router_handler = require('../router_handler/user')

// 注册新用户
router.post('/reguser', router_handler.regUser)

// 登录
router.post('/login', router_handler.login)

module.exports = router