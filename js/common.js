function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}


function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

if (getCookie('loading') !== 'done') {
  const firstPreloader = document.querySelector('.preloader-item.first')
  const secondPreloader = document.querySelector('.preloader-item.second')
  const textPreloader = document.querySelector('.preloader-text')
  const imgsPreloader = document.querySelector('.preloader-imgs')
  const wrapperPreloader = document.querySelector('.preloader__wrapper')
  const leftPreloader = document.querySelector('.preloader__left')
  const rightPreloader = document.querySelector('.preloader__right')
  const preloader = document.querySelector('.preloader')

  preloader.style.display = 'flex'

  const tlPl = gsap.timeline({});

  setTimeout( () => {
    preloader.style.display = 'flex'
  }, 0)
  setTimeout( () => {
      document.querySelector('body').style.overflowY = 'hidden'
  }, 0)
  setTimeout( () => {
  tlPl.fromTo(imgsPreloader, 
      {display: 'none', duration: 1}, 
      {display: 'flex', duration: 1})
      .fromTo(imgsPreloader, 
      {width: '0', duration: 1}, 
      {width: '117px', duration: 1}).
      fromTo(firstPreloader, 
      {width: '117px', duration: 1}, 
      {width: 0, duration: 1})
      .fromTo(secondPreloader, 
      {width: '117px', duration: 1}, 
      {width: 0, duration: 1})
      .fromTo(textPreloader, 
      {display: 'none', width: '0', duration: 1}, 
      {display: 'flex', width: '282px', duration: 1})
  }, 0)
  setTimeout( () => {
      preloader.style.transform = 'translateY(-100%)'
  }, 6000)
  setTimeout( () => {
      preloader.style.display = 'none'
      document.querySelector('body').style.overflowY = 'auto'
  }, 9000)
}

document.addEventListener("DOMContentLoaded", () => {

// PHONE MASK
maskPhone('input#phone')

// SHOW/HIDE MENU FUNCTION  
document.querySelector('.header .burger-btn').addEventListener('click', () => {
  document.querySelector('.menu__container').style.display = 'flex'
  setTimeout( () => {
      document.querySelector('.menu__container').style.transform = 'translateY(0vh)'
  }, 500)
}) 

document.querySelector('.burger-btn.menu-burger').addEventListener('click', () => {
  document.querySelector('.menu__container').style.transform = 'translateY(-100vh)'
  setTimeout( () => {
      document.querySelector('.menu__container').style.display = 'none'
  }, 500)
}) 

$('a[href*="#"]').click(function() {
  if (document.querySelector('#steps') !== null) {
    document.querySelector('.menu__container').style.transform = 'translateY(-100vh)'
    setTimeout( () => {
        document.querySelector('.menu__container').style.display = 'none'
    }, 500)
  }
});

// Smooth scroll when link clicked
const $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

// functions on click
document.querySelectorAll('.n__item-link').forEach(element => {
    element.addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.news__popup-container').style.display = 'flex'
      setTimeout(() => {
        document.querySelector('.news__popup-container').style.opacity = '1'
      }, 500);
      
    })
  })
  
  if (document.querySelector('.news__popup-container') !== null) {
    document.querySelector('.news__popup-close').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.news__popup-container').style.opacity = '0'
      setTimeout(() => {
        document.querySelector('.news__popup-container').style.display = 'none'
      }, 500);
    })
    
    document.querySelector('.news__popup-overlay').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.news__popup-container').style.opacity = '0'
      setTimeout(() => {
        document.querySelector('.news__popup-container').style.display = 'none'
      }, 500);
    })
  }

  if (document.querySelector('.cat__close') !== null) {
    document.querySelector('.cat__close').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.cat__nav').style.transform = 'translateX(-100%)'
      setTimeout(() => {
        document.querySelector('.cat__nav').style.display = 'none'
      }, 500);
    })
    
    document.querySelector('.category__mobile').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.cat__nav').style.display = 'flex'
      setTimeout(() => {
        document.querySelector('.cat__nav').style.transform = 'translateX(0%)'
      }, 500);
    })
  }

  if (document.querySelector('.call__overlay') !== null) {
    document.querySelector('.call__close').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.call__overlay').style.opacity = '0'
      setTimeout(() => {
        document.querySelector('.call__overlay').style.display = 'none'
      }, 500);
    })

    document.querySelector('.call__mask').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.call__overlay').style.opacity = '0'
      setTimeout(() => {
        document.querySelector('.call__overlay').style.display = 'none'
      }, 500);
    })
    
    document.querySelector('header .call-btn').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.call__overlay').style.display = 'flex'
      setTimeout(() => {
        document.querySelector('.call__overlay').style.opacity = '1'
      }, 500);
    })

    document.querySelector('.menu__container .call-btn').addEventListener('click', (target)=> {
      target.preventDefault()
      document.querySelector('.call__overlay').style.display = 'flex'
      setTimeout(() => {
        document.querySelector('.call__overlay').style.opacity = '1'
      }, 500);
    })

    document.querySelectorAll('.cat__list-element.price').forEach(el => {
      el.addEventListener('click', (target)=> {
        target.preventDefault()
        document.querySelector('.call__overlay').style.display = 'flex'
        setTimeout(() => {
          document.querySelector('.call__overlay').style.opacity = '1'
        }, 500);
      })
    })
  }

  if (document.querySelector('.floor-plan') !== null) {

    function floorPlan(num) {
      document.querySelector(`.fp__text-item.${num}`).addEventListener('mouseover', (target)=> {
        target.preventDefault()
        document.querySelectorAll(`.fp__text-item`).forEach(el => {
          el.classList.remove('active')
        })
        document.querySelector(`.fp__text-item.${num}`).classList.add('active')
        document.querySelectorAll(`.floor__img`).forEach(el => {
          el.style.opacity = 0
        })
        document.querySelector(`.${num}.floor__img`).style.opacity = '1'
      })

      document.querySelector(`.fp__text-item.${num}`).addEventListener('mouseout', (target)=> {
        target.preventDefault()
        document.querySelectorAll(`.fp__text-item`).forEach(el => {
          el.classList.remove('active')
        })
      })
    }

    floorPlan('first')
    floorPlan('second')
    floorPlan('third')

  }

  if (document.querySelector('.ns-nav') !== null) {

    const newsItems = document.querySelectorAll('.n__item-link')

    document.querySelectorAll('.ns-nav-item').forEach(el => {
      el.addEventListener('click', () => {
        if (document.querySelector('.ns-nav-item.active') !== null) {
          document.querySelector('.ns-nav-item.active').classList.remove('active')
        }
        el.classList.add('active')
      })
    })

    document.querySelector('.new__nav').addEventListener('click', () => { 
      newsItems.forEach(el => {
        el.style.display = 'block'
      })
      for (let i = 0; i < 12; i += 3) {
        newsItems[i].style.display = 'none'
      }
    })

    document.querySelector('.sale__nav').addEventListener('click', () => {
      newsItems.forEach(el => {
        el.style.display = 'block'
      })
      for (let i = 0; i < 12; i += 2) {
        newsItems[i].style.display = 'none'
      }
    })

    document.querySelector('.all__nav').addEventListener('click', () => { 
      newsItems.forEach(el => {
        el.style.display = 'block'
      })
    })

  }
  
// SLICK SLIDER functions


$('.img__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  prevArrow: '.prev-arrow',
  nextArrow: '.next-arrow'
});

$('.steps__wrap').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.steps__main .arrow-prev',
  nextArrow: '.steps__main .arrow-next'
});

$('.layout__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.layout__arrow.prev',
  nextArrow: '.layout__arrow.next'
});

$('.sticky__slider__wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.sticky__arrow.prev',
  nextArrow: '.sticky__arrow.next',
  fade: true,
});


// GALLERY COUNT
if (document.querySelector('.small-gallery') !== null) {

const listLength = document.querySelectorAll('ul.slick-dots li').length
const currentCount = document.querySelector('.count__num')
const allCount = document.querySelector('.count__all')

document.querySelector('.small-gallery .slick-dots').style.display = 'none'

allCount.innerHTML = `${listLength}`

document.querySelector('.sg__prev').addEventListener('click', e => {
    document.querySelector('.count__num').innerHTML = document.querySelector('ul.slick-dots li.slick-active').textContent
  })

  document.querySelector('.sg__next').addEventListener('click', e => {
    document.querySelector('.count__num').innerHTML = document.querySelector('ul.slick-dots li.slick-active').textContent
  })
}

setCookie('loading', 'done')

});


