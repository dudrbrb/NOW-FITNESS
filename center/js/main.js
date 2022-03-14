window.addEventListener('load', (e) => {
    makeCenterList();
    clickCenter();
    makeSwipe();
});


function makeCenterList(){
    지점명목록.forEach(지점명=>{
        var listBox = document.querySelector('.center-list');
        listBox.innerHTML += `<li ${지점명==선택한지점명 ? 'class="active"': ''}>${지점명}</li>`;
    });
}

var wrapper = document.querySelectorAll('.swiper-wrapper');

function clickCenter(){
    var list = document.querySelectorAll('.center-list li');
    
    [].forEach.call(list, function(e){ 
        e.addEventListener("click", function(){
            list.forEach(e => e.classList.remove('active'))
            e.classList.add('active')
            wrapper.forEach(e => e.innerHTML = '')
            선택한지점명 = e.innerHTML;
            makeSwipe()
        }, false); 
    });
}

function makeSwipe(){
    document.querySelector('.now-center').innerHTML = 선택한지점명;

    var imgList = 이미지목록[선택한지점명]
    if(imgList == undefined) imgList = 이미지목록.오픈예정
    imgList.forEach(e => {
        wrapper[0].innerHTML += `<div class="swiper-slide">
                                <img src="${e}" />
                            </div>`
        wrapper[1].innerHTML += `<div class="swiper-slide">
                                <img src="${e}" />
                            </div>`
    });

    setTimeout(() => {
        swiper() 
    }, 400);
}


function swiper(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        observer: true
    });
    
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        observer: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
    
}