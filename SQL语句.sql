-- 通过*把users表中所有的数据查询出来
select * from ev_users

-- 从users表中把usernaem和password对应的数据查询出来
-- select username,password from users

-- 向users表中,插入新数据,username的值为tony stark password的值为098123
-- insert into users(username,password) values('tony stark','098123')

-- 将id为4的用户密码,更新成888888
-- update users set password='888888' where id=3

-- 更新id为2的用户,把用户密码更新为admin123 同时,把用户的状态更新为1 
-- update users set password='admin123',status=1 where id=2

-- 删除users表中,id为4的用户
-- delete from users where id=4
 
-- 演示where子句的使用
-- select * from users where status=1
 
-- 使用or来显示所有状态为1或者username='zs'的用户
-- select * from users where status=1 or username='zs'

-- 对users表中的数据,按照status字段进行升序排序 desc表示降序排列  asc表示升序排列
-- select * from users order by id desc 

-- 对users表中的数据,先按照status进行降序排序,再按照username字母的顺序,进行升序的排序
-- select * from users order by status desc,username asc 

-- 使用count(*) 来统计users表中,状态为0的用户总数量
-- select count(*) from users where status=0

-- 使用AS关键字给列起别名
 -- select count(*) as total from users where status=0