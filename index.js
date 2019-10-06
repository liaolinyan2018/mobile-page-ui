let handle = () => {
  console.log('文档加载成功')
  let menu = document.getElementById('menu')
  let nav = document.getElementById('nav')
  let [x1, y1, x2, y2] = []
  let [touchX, touchY] = []
  menu.addEventListener(
    'touchstart',
    e => {
      e.stopPropagation()
      nav.style.display = nav.style.display !== 'block' ? 'block' : 'none'
    },
    false
  )
  nav.addEventListener('touchstart', e => {
    e.stopPropagation()
    ;[x1, y1, x2, y2] = [
      nav.offsetLeft,
      nav.offsetTop,
      x1 + nav.offsetWidth,
      y1 + nav.offsetHeight
    ]
  })
  nav.addEventListener(
    'touchmove',
    e => {
      e.stopPropagation()
      window.requestAnimationFrame(() => {
        touchX = e.changedTouches[0].pageX
        touchY = e.changedTouches[0].pageY
        if (!(touchX >= x1 && touchX <= x2 && touchY >= y1 && touchY <= y2)) {
          nav.style.display = 'none'
        }
      })
    },
    false
  )
  document.addEventListener('touchstart', e => {
    if (nav.style.display === 'block') {
      nav.style.display = 'none'
    }
  })
}
document.addEventListener('DOMContentLoaded', handle, false)
