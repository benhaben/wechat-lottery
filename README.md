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