const hamburger = document.querySelector('.icon-menu');
const nav = document.querySelector('nav');
const li = document.querySelector('li')
const light = document.querySelector('.light')

hamburger.addEventListener('click', function(){
    nav.classList.toggle('showNav')
    light.classList.toggle('dramat')
    hamburger.classList.toggle('orange')
})


   




const $doc = $(document);
const $body = $('body');

const $start = $('.startButton')
const $main = $('main')
$('.startButton').click(function(){
    $('html, body').animate({
        scrollTop: $('main').offset().top
    }, 2000);
})

const $about = $('.li1')
const $sec1 = $('main')
$('.li1').click(function(){
    $('html, body').animate({
        scrollTop: $('main').offset().top
    }, 2000);
})
const $gallery = $('.li2')
const $sec2 = $('.portraits')
$('.li2').click(function(){
    $('html, body').animate({
        scrollTop: $('.portraits').offset().top
    }, 2000);
})
const $marvel = $('.li3')
const $sec3 = $('.marvel')
$('.li3').click(function(){
    $('html, body').animate({
        scrollTop: $('.marvel').offset().top
    }, 2000);
})
const $footer = $('.li4')
const $sec4 = $('footer')
$('.li4').click(function(){
    $('html, body').animate({
        scrollTop: $('footer').offset().top
    }, 2000);
})
const $home = $('.icon-bank')
const $header= $('header')
$('.icon-bank').click(function(){
    $('html, body').animate({
        scrollTop: $('header').offset().top
    }, 2000);
})
