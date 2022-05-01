// 导入数据库操作模块
const { result } = require('@hapi/joi/lib/base')
const db = require('../db/index')

// 获取用户基本信息的函数
exports.getUserinfo = (req, res) => {
    // res.send('ok')
    // 定义查询用户信息的SQL语句
    const sql = 'select id,username,nickname,email,user_pic from ev_users where id=?'
    // 调用db.query()执行SQL语句
    db.query(sql, req.user.id, (err, results) => {
        // 执行SQL语句失败
        if (err) {
            return res.cc(err)
        }
        // 执行SQL语句成功,但是查询的结果可能为空
        if (results.length !== 1) {
            return res.cc('获取用户信息失败!')
        }

        // 用户信息获取成功
        res.send({
            status: 0,
            message: '获取用户信息成功!',
            data: results[0]
        })
    })
}

// 更新用户基本信息的处理函数
exports.updateUserInfo = (req, res) => {
    res.send('ok')
}