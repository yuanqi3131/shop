// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showAuthorize:false,
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (response) => {
        console.log(response)
        if (response.authSetting['scope.userInfo']){
         this.setData({
           showAuthorize:true
         })
        }
        else{
          showAuthorize: false
        }
      }
    })

    wx.getUserInfo({
      success:(data) =>{
        this.setData({
          userInfo:data.userInfo
        })
      }
    })
  },
  handleGetUserInfo(data){
    console.log(data);
    if (data.detail.rawData){
      //用户点击了允许授权
      this.onLoad();
    }
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