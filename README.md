## 云函数开发环境搭建

https://doc.minapp.com/cloud-function/cli.html

yarn global add mincloud

mincloud
用法：
 mincloud <command>

支持的 command 有：
   delete, deploy, invoke, list, login, logout, new, pull

- mincloud: v1.0.5
- node: v8.10.0


## 知晓云触发器

### trrigerCheckLotteryStatus 

检查开奖状态，调用云函数 CheckLotteryStatus 

触发器触发时间 18 8,18,20 * * *


### trrigerWhenOpenLottery

增加开奖者运气值： _userprofile 表 lucky_num 字段
增加运气值记录：luck_record表增加一条记录

