window.addEventListener('load', (e) => {
    makeNotice();
    openPopup();
    closePopup();
});

function makeNotice(){
    var listBox = document.querySelector('.notice-list');
    공지사항목록.forEach((e, i)=>{
        listBox.innerHTML += `<div class="notice">
                                <div class="img-box">
                                    <img src="${e.이미지}" >
                                </div>
                                <div class="txt-box">
                                    <h3 class="notice-title">${e.제목}</h3>
                                    <p>${e.내용}</p>
                                    <span>${e.날짜}</span>
                                    <button class="detail-btn" data-num="${i}">자세히보기</button>
                                </div>
                            </div>`;
        
    })
}

function openPopup(){
    var btns = document.querySelectorAll('.detail-btn');

    [].forEach.call(btns, function(e){ 
        e.addEventListener("click", function(){
            var txtBox = document.querySelector('.popup .txt-box');
            var imgBox = document.querySelector('.popup .img-box');
            var 선택공지 = 공지사항목록[e.getAttribute('data-num')];

            imgBox.innerHTML = `<img src="${선택공지.이미지}">`
            txtBox.innerHTML = `<h3 class="notice-title">${선택공지.제목}</h3>
                                <p>${선택공지.내용}</p>
                                <span>${선택공지.날짜}</span>`;

            popup('block');
        }, false); 
    });
}
function closePopup(){
    var btns = document.querySelectorAll('.close');

    [].forEach.call(btns, function(e){ 
        e.addEventListener("click", function(){
            popup('none')
        }, false); 
    });
}

function popup(popupState){
    var popup = document.querySelector('.popup-wrapper');
    popup.style.display = popupState;
}

