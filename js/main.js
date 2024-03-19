const swiper = new Swiper('.block-content__swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});

const bestSolutionSwiper = new Swiper('.best-solution__swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: "true",

    navigation: {
        nextEl: '.best-solution__swiper-prev',
        prevEl: '.best-solution__swiper-next',
    },
});

const clientWorkSwiper = new Swiper('.client-work__swiper', {
    slidesPerView: 1,
    grabCursor: "true",

    navigation: {
        nextEl: '.client-work__swiper-prev',
        prevEl: '.client-work__swiper-next',
    },
});

const feedbackOpinionsSwiper = new Swiper('.feedback__opinions-swiper', {
    slidesPerView: 1,
    grabCursor: "true",

    navigation: {
        nextEl: '.feedback__opinions-swiper-prev',
        prevEl: '.feedback__opinions-swiper-next',
    },
});

const feedbackSwiper = new Swiper('.feedback__swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",

    pagination: {
        el: ".feedback__swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});
