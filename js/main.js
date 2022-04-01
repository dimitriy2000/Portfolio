// Линия сверху aka progress bar
const PROGRESS_BAR = document.querySelector('.progress_bar');

window.addEventListener('scroll', progressBar)

function progressBar(e) {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let percent = windowScroll / windowHeight * 100;

  PROGRESS_BAR.style.width = percent + '%';
}
// Анимация текста при загрузке страницы и скроле(откл)
const ANIMATE_ITEMS = document.querySelectorAll('._animate-items');

if (ANIMATE_ITEMS.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < ANIMATE_ITEMS.length; index++) {
      const ANIMATE_ITEM = ANIMATE_ITEMS[index];
      const ANIMATE_ITEM_HEIGHT = ANIMATE_ITEM.offsetHeight;
      const ANIMATE_ITEM_OFFSET = offset(ANIMATE_ITEM).top;
      const ANIMATE_START = 4;

      let animItemPoint = window.innerHeight - ANIMATE_ITEM_HEIGHT / ANIMATE_START;
      if (ANIMATE_ITEM_HEIGHT > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / ANIMATE_START;
      }

      if ((pageYOffset > ANIMATE_ITEM_OFFSET - animItemPoint) && pageYOffset < (ANIMATE_ITEM_OFFSET + ANIMATE_ITEM_HEIGHT)) {
        ANIMATE_ITEM.classList.add('_active');
      } else {
        if (!ANIMATE_ITEM.classList.contains('_animate-no-repeat')) {
          ANIMATE_ITEM.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

  }
  animOnScroll();
}

//Смена фона
document.querySelector(".btn-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});