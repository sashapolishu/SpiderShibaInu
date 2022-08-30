let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let header__btn = document.querySelector('.header__btn')
burger.onclick = function(){
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    header__btn.classList.toggle('active');

}
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
      })
  })
}

  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }else {
        change.target.classList.remove('element-show');
        }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }