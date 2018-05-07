const ff = require('../../utils/fanfou')

Page({
    data: {
        accounts: null
    },
    login(e) {
        // 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框
        wx.showLoading({
            // 提示的内容
            title: '正在加载',
            // 是否显示透明蒙层，防止触摸穿透
            mask: true
        })
        // 登陆认证
        ff.authPromise(e.detail.value.username, e.detail.value.password)
            .then((e) => {
                console.log(e)
                // 认证成功后跳转到首页
                // wx.reLaunch: 关闭所有页面，打开到应用内的某个页面
                wx.reLaunch({ url: '/pages/home/home' })
            })
            .catch((e) => {
                if (e.message) {
                    wx.showToast({
                        title: '用户名密码错误，请重新输入',
                        icon: 'none',
                        mask: true,
                        duration: 2000
                    })
                }
            })
    },
    getAccounts() {
        // return wx.getStorageSync('accounts') || []
        return wx.getStorageSync('accounts')
    },
    onLoad: function (options) {
        wx.setNavigationBarTitle({ title: '饭否'})
        const accounts = this.getAccounts()
        console.log(accounts)
        this.setData({ accounts })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})