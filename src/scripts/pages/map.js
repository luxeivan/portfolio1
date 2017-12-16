function initMap() {
	// Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    var centerLatLng = new google.maps.LatLng(55.648953, 37.765027);
    var centermaps = new google.maps.LatLng(55.646333, 37.746789);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: centermaps, // Координаты центра мы берем из переменной centerLatLng
        zoom: 15,  
        disableDefaultUI: true,
        scrollwheel: false,            // Зум по умолчанию. Возможные значения от 0 до 21
        zoomControl: true,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#1bb696"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
	};
	// Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var image = new google.maps.MarkerImage('./assets/images/icons/map_marker.svg',      
    new google.maps.Size(100, 100),      
    new google.maps.Point(0,0),      
    new google.maps.Point(0, 32));
    var marker = new google.maps.Marker({
        position: centerLatLng,
        map:map,
        icon: image
    });
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);