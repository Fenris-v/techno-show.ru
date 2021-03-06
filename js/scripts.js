$(document).ready(() => {
    /**
     * SLICK
     */
    $('.reviews__list').slick({
        infinite: true,
        arrows: true,
        dots: true,
        nextArrow: '<button type="button" class="slick-next"><svg width="55" height="55" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.2" r="27" transform="matrix(-1 0 0 1 27.5 27.5)" stroke="white"/><g opacity="0.8"><path d="M25.5962 22.2574L26.6287 21.2249L32.4037 26.9999L26.6287 32.7749L25.5962 31.7424L30.3387 26.9999L25.5962 22.2574H25.5962Z"/></g></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="55" height="55" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.2" r="27" transform="matrix(-1 0 0 1 27.5 27.5)" stroke="white"/><g opacity="0.8"><path d="M25.5962 22.2574L26.6287 21.2249L32.4037 26.9999L26.6287 32.7749L25.5962 31.7424L30.3387 26.9999L25.5962 22.2574H25.5962Z"/></g></svg></button>',
        slidesToShow: 1,
        autoplay: true,
    });

    $('.portfolio__list').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: '<button type="button" class="slick-next"><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27.5" cy="27.5" r="27.5" fill="#213360"/><g opacity="0.8"><path d="M29.4038 22.2575L28.3713 21.225L22.5963 27L28.3713 32.775L29.4038 31.7425L24.6613 27L29.4038 22.2575H29.4038Z" fill="#F2F2F2"/></g></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27.5" cy="27.5" r="27.5" fill="#213360"/><g opacity="0.8"><path d="M29.4038 22.2575L28.3713 21.225L22.5963 27L28.3713 32.775L29.4038 31.7425L24.6613 27L29.4038 22.2575H29.4038Z" fill="#F2F2F2"/></g></svg></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.equipment__list').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27.5" cy="27.5" r="27.5" fill="#213360"/><g opacity="0.8"><path d="M29.4038 22.2575L28.3713 21.225L22.5963 27L28.3713 32.775L29.4038 31.7425L24.6613 27L29.4038 22.2575H29.4038Z" fill="#F2F2F2"/></g></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27.5" cy="27.5" r="27.5" fill="#213360"/><g opacity="0.8"><path d="M29.4038 22.2575L28.3713 21.225L22.5963 27L28.3713 32.775L29.4038 31.7425L24.6613 27L29.4038 22.2575H29.4038Z" fill="#F2F2F2"/></g></svg></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.clients__list').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        nextArrow: '<button type="button" class="slick-next"><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27.5" cy="27.5" r="27.5" fill="#213360"/><g opacity="0.8"><path d="M29.4038 22.2575L28.3713 21.225L22.5963 27L28.3713 32.775L29.4038 31.7425L24.6613 27L29.4038 22.2575H29.4038Z" fill="#F2F2F2"/></g></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27.5" cy="27.5" r="27.5" fill="#213360"/><g opacity="0.8"><path d="M29.4038 22.2575L28.3713 21.225L22.5963 27L28.3713 32.775L29.4038 31.7425L24.6613 27L29.4038 22.2575H29.4038Z" fill="#F2F2F2"/></g></svg></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.hero__slider').slick({
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        autoplay: false,
    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', () => {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });

    /**
     * ANCHOR
     */
    $('.anchor').on('click', (e) => {
        e.preventDefault();
        let id = $(e.target).attr('href');
        let top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
    });

    /**
     * TABS
     */
    let tabList = $('.gallery__tabs__item');
    let tabContent = $('.gallery__content__item');
    tabList.on('click', (e) => {
        e.preventDefault();

        let currentTab = $(e.target).hasClass('gallery__tabs__item')
            ? $(e.target)
            : $(e.target).parents('.gallery__tabs__item');

        if (currentTab.hasClass('active')) {
            return;
        }

        tabList.removeClass('active');
        tabContent.removeClass('active');

        currentTab.addClass('active');
        tabContent.eq(currentTab.index()).addClass('active');
    });

    /**
     * FANCYBOX
     */
    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
    });
});
