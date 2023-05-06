document.addEventListener("DOMContentLoaded", () => {
  let burger = document.querySelector('.burger');
  let menu = document.querySelector('.head__top-right');
  let menuList = document.querySelectorAll('.nav__item');
  // let body = document.body;

  burger.addEventListener('click',
    function (e) {
      e.preventDefault();
      burger.classList.add('burger--active');
      menu.classList.add('header__nav--active');
      document.body.classList.add('stop-scroll');
      let spanIs = document.querySelector('.showClose');
      if (!(typeof (spanIs) != 'undefined' && spanIs != null)) {
        let elm = document.querySelector('.header__nav--active');
        let span = document.createElement("span");
        span.style.display = 'block';
        span.style.width = "23px";
        span.style.height = "25px";
        span.tabIndex = 0;
        span.innerHTML = '<svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#FFFFFF"/><path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#FFFFFF"/></svg>'
        span.classList.add('showClose');
        span.ariaLabel = 'Закрыть'

        elm.prepend(span);


        // pseudoElm =elm.previousSibling
        span.addEventListener('click', function (e) {
          burger.classList.remove('burger--active');
          menu.classList.remove('header__nav--active');
          document.body.classList.remove('stop-scroll');
        })
      }
    });
  menuList.forEach(function (el) {
    el.addEventListener('click',
      function () {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
      })
  });
  const btnSearch = document.querySelector('.head__top__search-btn');
  const formSearch = document.querySelector('.head__search-adv');
  const btnCloseFormSearch = document.querySelector('.head__search__close-btn')
  btnSearch.addEventListener('click', ()=>{
    btnSearch.classList.add('displeyNon');
    formSearch.classList.add('head__search-adv--active');
  })

  btnCloseFormSearch.addEventListener('click', function (e) {
    btnSearch.classList.remove('displeyNon');
    formSearch.classList.remove('head__search-adv--active');
  })
/*
  let divBtn = document.querySelector('.head__top__search-wrap');
  let btnSearch = document.querySelector('.head__top__search-btn');
  // let formSeach = document.querySelector('.hero__search');
  // let btnCloseForm = document.querySelector('.hero__search__close-btn');
  // btnSearch.addEventListener('click',
  //   function () {
  //     formSeach.classList.add('hero__search--active');
  //     btnSearch.style.visibility = 'hidden';

  //   }
  // )
  // btnCloseForm.addEventListener('click', function () {
  //   formSeach.classList.remove('hero__search--active');
  //   btnSearch.style.visibility = 'visible';
  // })
  btnSearch.addEventListener('click', function () {
    btnSearch.classList.add('displeyNon');
    let divIs = document.getElementById('div__search');

    if (!(typeof (divIs) != 'undefined' && divIs != null)) {
      let div = document.createElement('div');
      let form = document.createElement('form');
      form.action = "https://jsonplaceholder.typicode.com/posts";
      form.method = "POST";
      form.ariaLabel = "форма поиска по сайту";
      form.style.display = 'inline-flex';
      form.classList.add('hero__search-form');
      (window.screen.availWidth > 768) ? form.style.padding = '0': (window.screen.availWidth > 576) ? form.style.padding = '34px 50px 37px 53px' : form.style.padding = '34px 15px 37px 15px';
      if (window.screen.availWidth <= 768) {
        form.style.width = '90%';
      }
      form.style.alignItems = 'center';
      form.style.justifyContent = 'space-between';

      let btnFormSearch = document.createElement('button');
      btnFormSearch.type = "submit";
      btnFormSearch.classList.add('hero__search-btn');
      btnFormSearch.classList.add('btn-reset');
      btnFormSearch.ariaLabel = "Кнопка поиска по сайту";

      let input = document.createElement('input');
      input.type = "search";
      input.name = "search";
      input.ariaLabel = "строка поиска по сайту";
      input.id = "hero__search-text";
      input.placeholder = '';

      let closeFormSearch = document.createElement('button');
      closeFormSearch.type = "button";
      closeFormSearch.classList.add('hero__search__close-btn');
      closeFormSearch.classList.add('btn-reset');
      closeFormSearch.addEventListener('click', function (e) {
        btnSearch.classList.remove('displeyNon');
        let divSearch = document.getElementById('div__search');
        divSearch.style.top = '-100px';
        divSearch.style.opacity = '0';
      })
      div.style.top = '-100px';
      div.style.opacity = '0';
      div.style.transition = 'top .5s, opacity .5s';
      // div.style.borderRadius = '24px';

      div.style.position = 'absolute';
      // div.style.right = '14px';
      div.id = 'div__search';
      div.append(form);
      form.append(btnFormSearch);
      form.append(input);

      form.append(closeFormSearch);

      divBtn.append(div);
      setTimeout(() => {
        div.style.opacity = 1;
        // console.log(window.screen.availWidth);
        (window.screen.availWidth > 768) ? div.style.top = '27px': div.style.top = '0';
      }, 1);
    } else {
      let divSearch = document.getElementById('div__search');
      (window.screen.availWidth > 768) ? divSearch.style.top = '27px': divSearch.style.top = '0';
      divSearch.style.opacity = '1';
    }
  })*/

  new Swiper('.hero__swiper', {
    // Default parameters

    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    autoplay: {
      delay: 2000
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    allowTouchMove: false,


  })


  document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
      });
    });
  })

  document.querySelectorAll('.js-tab-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.js-tab-btn').forEach(function (btn) {
        btn.classList.remove('active');

      });
      // e.currentTarget.classList.add('tabs-nav__btn--active');
      document.querySelector(`[data-path="${path}"]`).classList.add('active');
      document.querySelectorAll('.js-tab-content').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('active');
    });
  });

  document.querySelectorAll('.js-tab-btn').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const path = e.currentTarget.dataset.path;
      const scrollTarget = document.querySelector(`[data-target="${path}"]`);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
      });
    });
  })

  // document.addEventListener('keyup', function () {
  // 	console.log(document.activeElement)
  // })

  const params = {
    btnClassName: "js-header-dropdown-btn",
    dropClassName: "js-header-drop",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  };

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(
        params.disabledClassName,
        params.activeClassName
      );
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(
        `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
      );

      if (
        activeElements.length &&
        !evt.target.closest(`.${params.activeClassName}`)
      ) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(
          `.${params.dropClassName}[data-target="${path}"]`
        );

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

  setMenuListener();

  const defaultSelect = () => {
    const element = document.getElementById('gallery__type');
    const choices = new Choices(element, {
      searchEnabled: false,
      shouldSort: false,
      placeholder: true,
      placeholderValue: ""

    })
  }
  defaultSelect();

  function Accordion(element) {
    const panelHeading = element.querySelectorAll('.accordion__heading');
    const liItem = element.querySelectorAll('.accordion__question');
    let activePanelIndex = 0;
    panelHeading.forEach((panel, index) => {
      panel.addEventListener('click', () => {
        if (index !== activePanelIndex) {
          if (activePanelIndex !== -1) {
            panelHeading[activePanelIndex].classList.remove('is-active');
            liItem[activePanelIndex].classList.remove('is-active');
          }
          panelHeading[index].classList.add('is-active');
          liItem[index].classList.add('is-active');
          activePanelIndex = index;
        } else {
          panelHeading[activePanelIndex].classList.remove('is-active');
          liItem[activePanelIndex].classList.remove('is-active');
          activePanelIndex = -1;
        }
      })
    })

  }

  new Accordion(document.querySelector('.accordion'));


  ymaps.ready(init);

  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("contacts__card-elem",

      // Параметры карты.
      {
        // Географические координаты центра отображаемой карты.
        center: [55.758468, 37.601088],
        // Масштаб.
        zoom: 15,
        // Тип покрытия карты: "Спутник".
        type: 'yandex#map',
        controls: ['zoomControl', 'geolocationControl'],


      }, {
        suppressMapOpenBlock: true
      });
    myMap.controls.get('zoomControl').options.set({
      size: 'small',
      position: {
        bottom: 365,
        right: 0
      }
    });

    myMap.controls.get('geolocationControl').options.set({
      size: 'small',
      position: {
        bottom: 315,
        right: 0
      }
    });

    myMap.behaviors.disable('scrollZoom');


    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/cards_point.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });
    // Размещение геообъекта на карте.

    myMap.geoObjects.add(myPlacemark);
  }

  new Swiper(".gallery-container", {
    longSwipesMs: 300,
    grid: {
      rows: 1,
      fill: "row"
    },
    // focusableElements: 'input, select, option, textarea, button, video, label',
    pagination: {
      el: ".gallery .gallery-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery-next",
      prevEl: ".gallery-prev"
    },

    breakpoints: {
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },

    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });

  new Swiper(".events-container", {
    simulateTouch: false,
    longSwipesMs: 300,

    grid: {
      rows: 1,
      fill: "row"
    },
    // focusableElements: 'input, select, option, textarea, button, video, label',
    pagination: {
      el: ".events-swiper .events-pagination",
      type: 'bullets',
      clickable: true,

    },
    navigation: {
      nextEl: ".events-next",
      prevEl: ".events-prev"
    },

    breakpoints: {
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },

      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },

    a11y: {
      paginationBulletMessage: 'Слайд {{index}}'
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });



  new Swiper(".partners-container", {
    // rewind: true,
    longSwipesMs: 300,

    grid: {
      rows: 1,
      fill: "row"
    },

    // focusableElements: 'input, select, option, textarea, button, video, label',
    navigation: {
      nextEl: ".partners-next",
      prevEl: ".partners-prev"
    },

    breakpoints: {
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50
      },
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });

  tippy('.project__tooltip-btn', {
    theme: 'project-tultip',
    maxWidth: 275,
    duration: [300, 250],
    hideOnClick: true,

    animation: 'fade',
    placement: 'top',
  });

  new JustValidate('.contacts__form', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true,
      },
      tel: {
        required: true,
        minLength: 1,
        function: (name, value) => {
          const phone = value.split('+').join('').split('(').join('').split(')').join('').split(' ').join('').split('-').join('');

          return Number(phone) && phone.length !== 0
        }
      },


    },
    messages: {
      name: 'Вы не ввели имя',

      tel: {
        required: 'Вы не ввели телефон',
        function: 'Недопустимый формат',

      }
    },
  })

  document.querySelectorAll('.gallery-slide').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelector('.modal').classList.add('is-open');
      document.querySelector(`[data-target="${path}"]`).classList.add('modal-open');
      let pagePosition = window.scrollY;
      document.body.classList.add('disable-scroll');
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
    });
  });
  document.querySelectorAll('.modal__close').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      document.querySelector('.modal').classList.remove('is-open');
      document.querySelectorAll('.modal__conteiner').forEach(cont => {
        cont.classList.remove('modal-open');
      })

      let pagePosition = parseInt(document.body.dataset.position, 10);
      document.body.style.top = 'auto';
      document.body.classList.remove('disable-scroll');
      window.scroll({
        top: pagePosition,
        left: 0
      });
      document.body.removeAttribute('data-position');
    });
  });

  let selector = document.getElementById('tel');
  Inputmask("+79{1,10}").mask(selector);

  /*
    class Modal {
      constructor(options) {
        let dafaulOptions = {
          isOpen: () => {

          }
        }
        this.options = Object.assign(dafaulOptions, options);
        this.modal = document.querySelector('.modal');
        this.speed = 300;
        this.animation = 'fade';
        this.isOpen = false;
        this.modalConteiner = false;
        this.prevActiveElem = false;
        this.fixBlocks = document.querySelectorAll('.fix-block');
        this.focusElem = [
          'a[href]',
          'input',
          'button',
          'select',
          'texarea',
          '[tabindex]'
        ];
        this.events();
      }
      events() {
        if (this.modal) {
          document.addEventListener('click', function (e) {
            const clickElem = e.target.closest('[data-path]');
            if (clickElem) {
              let target = clickElem.dataset.path;
              this.modalConteiner = document.querySelector(`[data-target="${target}"]`);
              this.open();
              return;
            }
            if (e.target.closest('.modal__close')) {
              this.close();
              return;
            }
          }.bind(this));
          window.addEventListener('keydown', function (e) {
            if (e.keyCode == 27) {
              if (this.isOpen) {
                this.close();
              }
            }
          }.bind(this));
          this.modal.addEventListener('click', function (e) {
            if (!e.target.classList.contains('modal__conteiner') && !e.target.closest('.modal__conteiner')) {
              if (this.isOpen) {
                this.close();
              }
            }
          }.bind(this));
        }
      }
      open() {

        if (e.target.classList.contains('.gallery-slide')) {
          this.prevActiveElem = document.activeElement;
          this.modal.classList.add('is-open');
          this.disableScroll();
          this.modalConteiner.classList.add('modal-open');
          setTimeout(() => {
            this.modalConteiner.classList.add('animate-open');
            // this.options.isOpen(this);
            this.isOpen = true;
            this.focusTrap();
          }, this.speed)
        }
      }
      close() {
        if (this.modalConteiner) {
          this.modalConteiner.classList.remove('animate-open');
          this.modal.classList.remove('is-open');
          this.modalConteiner.classList.remove('modal-open');
          this.enableScroll();
          this.isOpen = false;
          this.focusTrap();

        }
      }

      focusTrap() {
        const focucalble = this.modalConteiner.querySelectorAll(this.focusElem);
        if (this.isOpen) {
          if (focucalble) focucalble[0].focus();

        } else {
          this.prevActiveElem.focus()
        }
      }
      disableScroll() {
        let pagePosition = window.scrollY;
        this.lockPadding();
        document.body.classList.add('disable-scroll');
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
      }
      enableScroll() {
        let pagePosition = parseInt(document.body.dataset.position, 10);
        this.unlockPadding();
        document.body.style.top = 'auto';
        document.body.classList.remove('disable-scroll');
        window.scroll({
          top: pagePosition,
          left: 0
        });
        document.body.removeAttribute('data-position');
      }
      lockPadding() {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        this.fixBlocks.forEach((el) => {
          el.style.paddingRight = paddingOffset;
        });
        document.body.style.paddingRight = paddingOffset;

      }
      unlockPadding() {
        this.fixBlocks.forEach((el) => {
          el.style.paddingRight = '0px';
        });
        document.body.style.paddingRight = '0px';
      }
    }

    const modal = new Modal({
        isOpen: (modal) => {
          console.log(modal);
        }
      }

    );

  */

});
