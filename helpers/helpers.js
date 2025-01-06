const tabs = document.querySelectorAll('.btn-options');
const content = document.querySelectorAll('.content-item');
const clickBtn = document.querySelector('.btn');
const itemLeft = document.querySelector('.item-left');

// const href = document.querySelectorAll('.mylinks');

// href.forEach((click) => {
//   click.addEventListener('click', () => {
//     href.forEach((c) => c.classList.remove('show'))
//     click.classList.add('show');
//   });
// });

clickBtn.addEventListener('click', () => {
  itemLeft.classList.toggle('show');
  itemLeft.style.transitionDelay = "0s"
});
closeEl.addEventListener('click', () => {
  itemLeft.classList.remove('show');
  itemLeft.style.transitionDelay = "4s"
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('show'));
    tab.classList.add('show');
    content.forEach((content) => {
      content.classList.remove('active');
      const target = tab.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });
});