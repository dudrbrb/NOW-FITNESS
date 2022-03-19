window.addEventListener('load', (e) => {
    showUp('.show-up');
    makeCenterList();
    clickCenter();
    myMap();
});

function myMap(){
    // var mapBox = document.getElementById("Map");
    var infoBox = document.querySelector('.location-info');

    // var myLatLng = {lat : 지도위치[선택한지점명].lat, lng : 지도위치[선택한지점명].lng};
    // mapBox.innerHTML = '';
    // var map = new google.maps.Map(mapBox, {
    //     center: myLatLng,
    //     zoom: 17,
    // });
    // new google.maps.Marker({
    //     position: myLatLng, map
    // });
    infoBox.innerHTML = `<h2>나우 휘트니스 ${선택한지점명}</h2>
                        <p>${지도위치[선택한지점명].address}</p>
                        <p><a href="tel:${지도위치[선택한지점명].tel}">Tel. ${지도위치[선택한지점명].tel}</a><br>
                        <a href="${지도위치[선택한지점명].instgramLink}" target="_blank">Instagram.${지도위치[선택한지점명].instagramID}</a></p>`;
}

function makeCenterList(){
    var listBox = document.querySelector('.center-list');
    
    지점명목록.forEach(지점명=>{
        listBox.innerHTML += `<li ${지점명==선택한지점명 ? 'class="active"': ''}>${지점명}</li>`;
    });
}

function clickCenter(){
    var list = document.querySelectorAll('.center-list li');
    
    [].forEach.call(list, function(e){ 
        e.addEventListener("click", function(){
            선택한지점명 = e.innerHTML;
            list.forEach(e => e.classList.remove('active'));
            e.classList.add('active');

            myMap();
        }, false); 
    });
}