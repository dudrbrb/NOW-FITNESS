window.addEventListener('load', (e) => {
    clickProgram();
    if(window.location.href.split('?')[1] == 'pl'){
        var plates = document.querySelector('header.pl');

        plates.scrollIntoView({behavior: "smooth", block: "start"});
    }
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
