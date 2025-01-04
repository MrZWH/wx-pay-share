export default {
  getUrlParam(name) {
    let url = window.location.search
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
    let r = url.substring(1).match(reg)
    if (r != null) return decodeURIComponent(r[2])
    return null
  }
}
