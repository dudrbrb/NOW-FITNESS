window.addEventListener('load', (e) => {
    makeNotice();
    openPopup();
    closePopup();
});

function makeNotice(){
    var listBox = document.querySelector('.notice-list');
    공지사항목록.forEach(e=>{
        listBox.innerHTML += `<div class="notice">
                                <div class="img-box">
                                    <img src="${e.이미지}" >
                                </div>
                                <div class="txt-box">
                                    <h3 class="notice-title">${e.제목}</h3>
                                    <p>${e.내용}</p>
                                    <span>${e.날짜}</span>
                                    <button class="detail-btn">자세히보기</button>
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
            
            // imgBox.innerHTML = ` <img src="${선택트레이너.이미지경로}">`
            // txtBox.innerHTML = `<h3>${선택트레이너.이름}</h3>
            //                     <p>나우휘트니스 ${선택트레이너.지점} <br>
            //                     ${선택트레이너.직위}</p>
            //                     <ul class="career-box"></ul>`;

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

