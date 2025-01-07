import wx from 'weixin-js-sdk';

export default {
  getUrlParam(name) {
    let url = window.location.search
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
    let r = url.substring(1).match(reg)
    if (r != null) return decodeURIComponent(r[2])
    return null
  },
  initShareInfo() {
    let shareInfo = {
      title: '分享标题',
      desc: '分享描述',
      link: '分享链接',
      imgUrl: '分享图片'
    }

    wx.onMenuShareTimeLine(shareInfo)
    wx.onMenuShareAppMessage(shareInfo)
    wx.onMenuShareQQ(shareInfo)
    wx.onMenuShareWeibo(shareInfo)
    wx.onMenuShareQZone(shareInfo)

    wx.updateAppMessageShareData(shareInfo)
    wx.updateTimelineShareData(shareInfo)
  }
}
