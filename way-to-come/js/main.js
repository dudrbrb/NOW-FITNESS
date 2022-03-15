window.addEventListener('load', (e) => {
    myMap()
});
let map;

function myMap(){
    var myLatLng = { lat: 35.125824, lng: 126.910878 }
    map = new google.maps.Map(document.getElementById("googleMap"), {
        center: myLatLng,
        zoom: 17,
    });
    new google.maps.Marker({
        position: myLatLng, map
    });
 }