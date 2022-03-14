window.addEventListener('load', (e) => {
    makeNav();
});

function makeNav(){
    var navBar = document.querySelector('nav');

    navBar.innerHTML = `<img src="/common/img/logo.png" alt="now fitness logo" class="logo">
                        <ul class="menu">
                            <li>지점안내</li>
                            <li>강사소개</li>
                            <li>프로그램
                                <ul>
                                    <li>P.T</li>
                                    <li>필라테스</li>
                                </ul>
                            </li>
                            <li>오시는 길</li>
                            <li>공지사항</li>
                            <li><a href="https://www.instagram.com/nowfitness_bongseon/" target="_blank">인스타그램</a></li>
                        </ul>`;
}