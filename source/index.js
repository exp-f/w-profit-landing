import './style/main.scss';

const headerItems = document.querySelectorAll('.header__item');

headerItems.forEach((item)=>{
  item.addEventListener('click', (e)=>{
    e.preventDefault();
    let rel = document.querySelector(`.${e.target.getAttribute('data-rel')}`);
    rel.scrollIntoView({behavior: 'smooth'});
  });
});