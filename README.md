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

## 云端配置
TODO: 云端配置
1. 参与抽奖消耗x个运气值，x=1，x在云端可配置
2. 1个运气值增加x个权重，x=2，x在云端可配置
3. 每个金额参与抽奖的人数，<金额，人数> 在云端可配置
4. 红包福袋比例方案可以配置，现在目前有三个，可以增加

## 知晓云触发器

### trrigerCheckLotteryStatus 

检查开奖状态，调用云函数 CheckLotteryStatus 
触发器触发时间 18 8,18,20 * * *
开奖需要做如下操作：

1. 更新 lottery status 为（3，已经开奖）
2. 更新发起抽奖者的 user 表的 luck_num
3. 随机抽出幸运儿，更新到（userLotteryTable，lottery_result），更新幸运儿的（user，balance或者lucky_num）
4. 发起通知，通知所有参与抽奖的用户已经开奖

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

## 知晓云云函数
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