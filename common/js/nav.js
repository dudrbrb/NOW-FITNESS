window.addEventListener('load', (e) => {
    makeNav();
    if (window.innerWidth <= 1024) {
        mobileMenu()
    }
});

function makeNav(){
    var navBar = document.querySelector('nav');

    navBar.innerHTML = `<a href="../main/" target="_self">
                            <img src="../common/img/logo.png" alt="now fitness logo" class="logo">
                        </a>
                        <button id="NavOpen">
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                        <ul class="menu">
                            <li id="NavClose"><img src="../common/img/nav-x.png"/></li>
                            <li><a href="../center/" target="_self">지점안내</a></li>
                            <li><a href="../trainer/" target="_self">강사소개</a></li>
                            <li><a href="../program/" target="_self">프로그램</a>
                                <ul>
                                    <li><a href="../program/" target="_self">P.T.</a></li>
                                    <li><a href="../program/?pl" target="_self">필라테스</a></li>
                                </ul>
                            </li>
                            <li><a href="../way-to-come/" target="_self">오시는 길</a></li>
                            <li><a href="../notice/" target="_self">공지사항</a></li>
                            <li><a href="https://www.instagram.com/nowfitness_bongseon/" target="_blank">인스타그램</a></li>
                        </ul>`;
}
function mobileMenu() {
    var openBtn = document.querySelector('#NavOpen');
    var closeBtn = document.querySelector('#NavClose');
    var mobileNav = document.querySelector('nav ul');
    
    openBtn.addEventListener("click", function () {
        console.log('aaa')
        mobileNav.style.transform = 'translateY(0)';
    })
    closeBtn.addEventListener("click", function(){
        mobileNav.style.transform = 'translateY(-100%)';
    })
}


// 모션
function showUp(t){
    var target = document.querySelectorAll(t);
    
    target.forEach((e, i) => {
        setTimeout(() => {
            e.style.opacity = 1;
            e.style.transform = 'translateY(0)'
        }, 300*i);
    })
}

function leftClip(t){
    var target = document.querySelectorAll(t);
    
    target.forEach((e, i) => {
        setTimeout(() => {
            e.style.clip = "rect(0px, 1000px, 200px, 0px)"
        }, 300*i);
    })
}