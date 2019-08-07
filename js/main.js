(() => {
    'use strict';
  
    let refOffset = 0; //initial number of px scrolled by user. Initial  set to 0
    const headerHeight = document.querySelector('.header__wrapper').clientHeight; //gets height
    const headerWrapper = document.querySelector('.header');
    const header = document.querySelector('.header__wrapper');
  
    const handler = () => {
      const newOffset = window.scrollY;
  // scrollY returns number of px scrooled verticaly by user
      if (newOffset > headerHeight) {
        if (newOffset > refOffset) {
          headerWrapper.classList.remove('animateIn');
          headerWrapper.classList.add('animateOut');
        } else {
          headerWrapper.classList.remove('animateOut');
          headerWrapper.classList.add('animateIn');
        }
        header.style.background = 'rgba(64, 64, 64, 0.7)';
        refOffset = newOffset;
      } else {
        header.style.backgroundColor = 'rgba(64, 64, 64, 1)';
      }
    };
  
    window.addEventListener('scroll', handler);
  })();

  // Hamburger menu 

  let mainNav = document.getElementById('js-menu');

  let navBarToggle = document.getElementById('js-navbar-toggle');


  navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');

  });

  //scroll to top
  const btnScrollToTop = document.querySelector('#btnScrollToTop');
  btnScrollToTop.addEventListener('click', function () {
    window.scrollTo({
      left:0,
      top:0,
      behavior:"smooth"
    });
  });