window.addEventListener('load', (e) => {
    makeNav();
});

function makeNav(){
    var navBar = document.querySelector('nav');

    navBar.innerHTML = `<a href="../main/" target="_self">
                            <img src="../common/img/logo.png" alt="now fitness logo" class="logo">
                        </a>
                        <ul class="menu">
                            <li><a href="../center/" target="_self">지점안내</a></li>
                            <li><a href="../trainer/" target="_self">강사소개</a></li>
                            <li><a href="../program/" target="_self">프로그램</a>
                                <ul>
                                    <li><a href="../program/?pt" target="_self">P.T</a></li>
                                    <li><a href="../program/?pl" target="_self">필라테스</a></li>
                                </ul>
                            </li>
                            <li><a href="../way-to-come/" target="_self">오시는 길</a></li>
                            <li><a href="../notice/" target="_self">공지사항</a></li>
                            <li><a href="https://www.instagram.com/nowfitness_bongseon/" target="_blank">인스타그램</a></li>
                        </ul>`;
}

