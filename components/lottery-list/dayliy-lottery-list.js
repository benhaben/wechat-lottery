Component({

    behaviors: [],

    properties: {},

    data: {}, // 私有数据，可用于模板渲染

    lifetimes: {
        // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
        attached: function () {
        },
        moved: function () {
        },
        detached: function () {
        },
    },

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
    }, // 此处attached的声明会被lifetimes字段中的声明覆盖
    ready: function () {
    },

    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () {
        },
        hide: function () {
        },
        resize: function () {
        },
    },

    methods: {
        onMyButtonTap: function () {
            this.setData({
                // 更新属性和数据的方法与更新页面数据的方法类似
            })
        },
        // 内部方法建议以下划线开头
        _myPrivateMethod: function () {
        },
        _propertyChange: function (newVal, oldVal) {
        }
    }

})
