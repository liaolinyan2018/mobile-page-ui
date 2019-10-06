;(function(doc, win) {
  var html = doc.documentElement
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function() {
    let clientWidth = html.clientWidth || win.innerWidth
    console.log(clientWidth)
    if (!clientWidth) return
    html.style.fontSize = clientWidth / 10 + 'px'
  }
  if (!doc.addEventListener) {
    alert('亲爱的，你的浏览器版本太低，导致页面无法正确显示，请先升级哦！')
    return
  }
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
