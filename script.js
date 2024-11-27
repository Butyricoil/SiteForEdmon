// Инициализация карты Google
function initMap() {
    var myLatLng = { lat: 45.0352, lng: 38.9753 }; // Координаты Краснодара

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: myLatLng,
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "г. Краснодар, ул. Примерная, д. 1"
    });
}
