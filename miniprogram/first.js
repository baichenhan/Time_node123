// first.js
var util = require('./js/utils.js');
Page({

  /**
   * 页面的初始数据
   * 
   */
  data: {

  },


  button1_click: function() {
    var click_time = util.formatTime(new Date());
    console.log("签到成功！");
    console.log("现在时间是：" + click_time);
    wx.showToast({
      title: '签到成功!\r\n签到时间是：' + click_time,
       icon: "none",
      duration: 2000
    })
    this.setData({
      click_time:click_time
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    setInterval(function(){
      var time = util.formatTime(new Date());
      // 再通过setData更改Page()里面的data，动态更新页面的数据
      that.setData({
        time: time
      });
      },1000);
      
    
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
    this.onReady();
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