window.addEventListener('load', (e) => {
    if(window.location.href.split('?')[1] == 'pl'){
        var plates = document.querySelector('header.pl');

        plates.scrollIntoView({behavior: "smooth", block: "start"});
    }
});
