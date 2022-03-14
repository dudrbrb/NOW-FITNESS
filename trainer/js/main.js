window.addEventListener('load', (e) => {
    makeCenterList();
    clickCenter();
    makeTrainer();
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
        trainer.forEach( 트레이너 =>{
            wrapper.innerHTML += `<div class="trainer-box">
                                    <img src="${트레이너.이미지경로}" alt="트레이너 이미지" />
                                    <div class="info">
                                        <h4>${트레이너.이름}</h4>
                                        <div></div>
                                        <p>
                                            ${트레이너.지점}<br>
                                            ${트레이너.직위}
                                        </p>
                                        <button>자세히보기</button>
                                    </div>
                                </div>`;
        });
    }
    
}