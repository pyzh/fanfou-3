const { CONSUMER_KEY } = require('./config/fanfou')

App({
    onLaunch: function () {
        let account = null
        // 获取登陆状态
        if (wx.getStorageSync('accounts')[0]) 　{
            console.log(wx.getStorageSync('accounts'))
            account = wx.getStorageSync('accounts')[0]
        }
        // 判断登陆状态
        if (!account || account.consumer_key !== CONSUMER_KEY) {
            console.log('没有登陆')
            // wx.setStorageSync('accounts', [])
            console.log('aaa')
            wx.reLaunch({ url: '/pages/login/login' })
            console.log('eee')
        } else {
            console.log('登陆了')
            // 成功登陆将账户信息保存到全局
            this.globalData.account = account
        }
    },
    globalData: {
        account: null,
        appid: null
    }
})