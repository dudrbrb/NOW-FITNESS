window.addEventListener('load', (e) => {
    titleMotion();
    iconMotion('section.pt .show-up');
    iconMotion('section.pl .show-up');
    clickProgram();
    if(window.location.href.split('?')[1] == 'pl'){
        var plates = document.querySelector('header.pl');

        plates.scrollIntoView({behavior: "smooth", block: "start"});
    }
});

window.addEventListener('scroll', ()=>{
    titleMotion();
    iconMotion('section.pt .show-up');
    iconMotion('section.pl .show-up');
});

function clickProgram() {
    var btns = document.querySelectorAll('.program-list li');

    [].forEach.call(btns, function(e){ 
        e.addEventListener("click", function(){
            var program = e.getAttribute('data-name');
            var section = '';

            program == 'pt'
                ? section = document.querySelector('header.pt')
                : section = document.querySelector('header.pl');
                
            section.scrollIntoView({behavior: "smooth", block: "start"});
        }, false); 
    });
}


function titleMotion(){
    var ele = document.querySelectorAll('h1.show-up');
    var eleOffsetArr = [];

    ele.forEach(e => {
        let eleOffset = e.getBoundingClientRect().top + window.pageYOffset -800;
        eleOffsetArr.push(eleOffset)
    });

    eleOffsetArr.forEach((offset, idx) => {
        if(window.scrollY > offset){
            ele[idx].style.opacity = 1;
            ele[idx].style.transform = 'translateY(0)';
        }
    });
}

function iconMotion(t){
    var ele = document.querySelectorAll(t);
    var eleOffsetArr = [];

    ele.forEach(e => {
        let eleOffset = e.getBoundingClientRect().top + window.pageYOffset - 800;
        eleOffsetArr.push(eleOffset)
    });

    eleOffsetArr.forEach((offset, idx) => {
        if(window.scrollY > offset){
            setTimeout(() => {
                ele[idx].style.opacity = 1;
                ele[idx].style.transform = 'translateY(0)';
            }, 300*idx);
        
        }
    });
}

