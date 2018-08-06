import './style/main.scss';

const headerItems = document.querySelectorAll('[data-rel]');

headerItems.forEach((item)=>{
  item.addEventListener('click', (e)=>{
    e.preventDefault();
    let rel = document.querySelector(`.${e.target.getAttribute('data-rel')}`);
    let menu = document.querySelector('.header__m_menu.open');
    if (menu) menu.classList.remove('open');
    window.scrollTo({
      top: rel.offsetTop - 100,
      behavior: 'smooth'
    })
  });
});


document.querySelector('.header__burger').addEventListener('click', (e)=>{
  document.querySelector('.header__m_menu').classList.add('open')
});