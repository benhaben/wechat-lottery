let data = require('./data.js')
data = data.response.data
let j = 1
const createRecycleContext = require('../../components/miniprogram-recycle-view/index.js')

Page({
    data: {},
    onLoad: function() {
        // 创建Recycle上下文
        const ctx = createRecycleContext({
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
    onUnload: function() {
        // 销毁Recycle上下文
        this.ctx.destroy()
        this.ctx = null
    },
    onReady: function() {
        this.showView()
    },
    // 展示列表 
    showView: function() {
        const ctx = this.ctx
        // API的调用方式
        ctx.splice(this.genData(), () => {
            // 新增加的数据渲染完毕之后, 触发的回调
        })
    },
    // 生成数据
    genData: function() {
        let newData = []
        data.forEach((item) => {
            if (item.selfHelpLotteries) {
                newData = newData.concat(item.selfHelpLotteries)
            }
            // 构造270份数据
            var item = item.selfHelpLotteries[0]
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
            item.bannerUrl = item.bannerUrl.replace('https', 'http')
            var newItem = Object.assign({}, item)
            if (k % 10 == 0) {
                newItem.azFirst = true
            }
            k++
            newItem.id = newItem.id + '_1'
            newItem.bannerUrl = newItem.bannerUrl.replace('https', 'http')
            newList.push(newItem)
        })
        return newList
    },
    // 下拉刷新
    scrollToLower: function() {
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