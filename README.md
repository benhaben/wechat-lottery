## 上传图片大小

background-size: 750rpx 400rpx;
15：8
165: 88
5:4 -> 15:12


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

## 设置为只读的数据

http://support.minapp.com/hc/request/view/1824/

1.user表的：balance，lucky_num，这两个只能被触发器修改。
2.lottery设置为不开放，只能通过云函数修改，这样可以服务端检查一遍参数。
3.user_lottery_record设置为不开放，只能通过云函数修改。
4.balance_lucky_record设置为不开放
5.config设置为不开放
6.error设置为不开放

## 云端配置
TODO: 云端配置
1. 参与抽奖消耗x个运气值，x=1，x在云端可配置
2. 1个运气值增加x个权重，x=2，x在云端可配置
3. 每个金额参与抽奖的人数，<金额，人数> 在云端可配置
4. 红包福袋比例方案可以配置，现在目前有三个，可以增加

## 抽奖状态的变迁

 * 由于抽奖不是商品，只能支付一次，所以不需要格外产生订单了，只需要改表抽奖状态即可
 * 状态变化是： status ： (0,没有支付）->（1，已经支付，等待审批）->（2，已经审批，抽奖中）->（3，已经开奖）
 * 2 的时候通过触发器更新记录表增加运气值。
 * 0是调用createLottery产生的，
 * 1是支付回调verifyPayment改的，
 * 2是管理员修改的，为了保证status安全，虽然approveLottery比较简单，也在云函数实现，status设置为只读
 * 3是checkLotteryStatusOpen中，开奖的时候修改的

## 知晓云触发器

### trrigerCheckLotteryOpen 

检查开奖状态，调用云函数 CheckLotteryStatus 
触发器触发时间 18 8,18,20 * * *
开奖需要做如下操作：

1. 更新 lottery status 为（3，已经开奖）
2. 更新发起抽奖者的 user 表的 luck_num
3. 随机抽出幸运儿，更新到（userLotteryTable，lottery_result），更新幸运儿的（user，balance或者lucky_num）
4. 发起通知，通知所有参与抽奖的用户已经开奖

### trrigerCheckLotteryTimeout

每八小时检查过期状态

### trrigerWhenCreateLottery
创建抽奖
增加开奖者运气值： _userprofile 表 lucky_num 字段
增加运气值记录：luck_record 表增加一条记录

### trrigerWhenOpenLottery
开奖
增加开奖者运气值： _userprofile 表 lucky_num 字段
增加运气值记录：luck_record 表增加一条记录

### triggerVerifyPayment

支付完以后验证支付金额，更新支付状态到（1，已经支付，等待审批）

### triggerWhenDailyCheckin

每日签到增加运气值和记录

## 知晓云云函数和其测试数据

### createLottery

```json
 {
            "url": "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1i5h6hpru0CZ8tVP.png",
            "open_date": "2019-09-06T11:44:38+08:00",
            "pic_data": [
                {
                    "info": "请加我微信",
                    "type": 0
                },
                {
                    "info": {
                        "content": "benhaben",
                        "title": ""
                    },
                    "type": 2
                },
                {
                    "info": "我们一起去黄石公园玩",
                    "type": 0
                },
                {
                    "info": "https://cloud-minapp-29726.cloud.ifanrusercontent.com/1i5igytoLiZzepmD.jpeg",
                    "type": 1
                }
            ],
            "status": 0,
            "file": null,
            "total_prize": "88.8",
            "plan_index": 2,
            "open_people_num": 8000,
            "tag_items": [
                "微商",
                "足球",
                "音乐",
                "亲子教育",
                "美食",
                "美女",
                "健身",
                "区块链"
            ],
            "desc_initiator": "我是一个程序员，请大家用一下这个产品，反馈一些意见",
            "plan": "红包98个/福袋25个",
            "avatar": "https://media.ifanrusercontent.com/tavatar/c5/44/c544557294841c832a8ac3f0d16550e500530773.jpg",
            "nickname": "沈寅xxx",
            "lucky_num": 8880.0,
            "lucky_num_per": 888.0,
            "created_at": 1567655040,
            "updated_at": 1567755318,
            "created_by": 81550584324453
        }
```