// pages/category/category.js
let datas = require('../../datas/list-data.js');
console.log(datas,typeof datas);
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    toview:'nav-0',
    active:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      list: datas.category_data
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;
      that.setData({
        toview:e.target.dataset.current,
        active: e.target.dataset.index
    })
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