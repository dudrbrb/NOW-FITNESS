window.addEventListener('load', (e) => {
    makeCenterList();
    clickCenter();
    makeTrainer();

    openPopup();
    closePopup();
});



function makeCenterList(){
    document.querySelector('.now-center').innerHTML = 선택한지점명;
    var listBox = document.querySelector('.center-list');

    지점명목록.forEach(지점명=>{
        listBox.innerHTML += `<li ${지점명==선택한지점명 ? 'class="active"': ''}>${지점명}</li>`;
    });
}

var wrapper = document.querySelector('.trainer-wrapper');

function clickCenter(){
    var list = document.querySelectorAll('.center-list li');
    
    [].forEach.call(list, function(e){ 
        e.addEventListener("click", function(){
            list.forEach(e => e.classList.remove('active'))
            e.classList.add('active')
            wrapper.innerHTML = ''
            선택한지점명 = e.innerHTML;
            
            makeTrainer();
        }, false); 
    });
}

function makeTrainer(){
    document.querySelector('.now-center').innerHTML = 선택한지점명;
    var trainer = 트레이너[선택한지점명];

    if(선택한지점명 == '2호점'){
        wrapper.innerHTML += `<div class="trainer-box">
                                <img src="./img/ready.jpg" alt="준비중" />
                            </div>`;
    }else{
        trainer.forEach( (트레이너, 순서) =>{
            wrapper.innerHTML += `<div class="trainer-box show-up">
                                    <img src="./img/${트레이너.이름}.jpg" alt="트레이너 이미지" />
                                    <div class="info">
                                        <h4>${트레이너.이름}</h4>
                                        <div></div>
                                        <p>
                                            ${트레이너.지점}<br>
                                            ${트레이너.직위}
                                        </p>
                                        <button class="detail-btn" data-num="${순서}">자세히보기</button>
                                    </div>
                                </div>`;
        });

        setTimeout(() => {
            showUp('.show-up');
        }, 200);
    }
}

function openPopup(){
    var btns = document.querySelectorAll('.detail-btn');

    [].forEach.call(btns, function(e){ 
        e.addEventListener("click", function(){
            var 선택트레이너 = 트레이너[선택한지점명][e.getAttribute('data-num')]
            var 경력 = 선택트레이너.경력;
            var txtBox = document.querySelector('.txt-box');
            var imgBox = document.querySelector('.img-box');
            
            imgBox.innerHTML = ` <img src="./img/${선택트레이너.이름}.jpg" alt="트레이너 사진">`
            txtBox.innerHTML = `<h3>${선택트레이너.이름}</h3>
                                <p>나우휘트니스 ${선택트레이너.지점} <br>
                                ${선택트레이너.직위}</p>
                                <ul class="career-box"></ul>`;


            경력.forEach(e=>{
                document.querySelector('.career-box').innerHTML += `<li>${e}</li>`
            });
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