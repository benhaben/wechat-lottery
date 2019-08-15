//获取应用实例
const app = getApp()
let data = require('./data.js')
let j = 1
data = data.response.data
const systemInfo = wx.getSystemInfoSync()

// 提交wx.createRecycleContext能力
const createRecycleContext = require('../../components/miniprogram-recycle-view/index.js')

Page({

    data: {
        placeholderImage: "data:image/svg+xml,%3Csvg height='140rpx' test='132rpx' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='50%25' x='40' height='20%25' style='fill:rgb(204,204,204);' /%3E %3C/svg%3E"
    },
    onLoad: function () {
        var ctx = createRecycleContext({
            id: 'recycleId',
            dataKey: 'recycleList',
            page: this,
            itemSize: {
                props: 'azFirst',
                queryClass: 'recycle-itemsize', // 动态查询的class
                dataKey: 'recycleListItemSize', // 预先渲染的数据的wx:for绑定的变量
            },
            placeholderClass: ['recycle-image', 'recycle-text'],
        })
        this.ctx = ctx;
    },
    onUnload: function () {
        this.ctx.destroy()
        this.ctx = null
    },
    onReady: function () {
        this.showView()
    },
    genData: function () {
        let newData = []
        data.forEach((item) => {
            if (item.goods) {
                newData = newData.concat(item.goods)
            }
            // 构造270份数据
            var item = item.goods[0]
            for (let i = 0; i < 50; i++) {
                newData.push(Object.assign({}, item))
            }
        })
        
        const newList = []
        let k = 0
        newData.forEach((item, i) => {
            item.idx = i
            if (k % 10 == 0) {
                item.azFirst = true
            } else {
                item.azFirst = false
            }
            k++
            newList.push(item)
            item.id = item.id + (j++)
            item.image_url = item.image_url.replace('https', 'http')
            var newItem = Object.assign({}, item)
            if (k % 10 == 0) {
                newItem.azFirst = true
            }
            k++
            newItem.id = newItem.id + '_1'
            newItem.image_url = newItem.image_url.replace('https', 'http')
            newList.push(newItem)
        })
        return newList
    },
    showView: function () {
        const ctx = this.ctx
        // API的调用方式
        ctx.splice(this.genData(), () => {
            // 新增加的数据渲染完毕之后, 触发的回调
        })
    },
    scrollToLower: function (e) {
        // 延迟1s，模拟网络请求
        if (this.isScrollToLower) return
        this.isScrollToLower = true
        setTimeout(() => {
            this.ctx.append(this.genData(), () => {
                this.isScrollToLower = false
            })
        }, 1000)
    }
})
