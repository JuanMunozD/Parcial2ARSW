var map;

function initMap()
{
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

}

function initMap2(lat,lng)
{
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: lng},
    zoom: 8
  });
  
    fetch('https://raw.githubusercontent.com/jayshields/google-maps-api-template/master/markers.json')
    .then(function(response){return response.json()})
    .then(plotMarkers(lat,lng));

}




function plotMarkers(lat,lng)
{

    var position = new google.maps.LatLng(lat, lng);

      new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      });
    
}


var w = (function () {
    return {
        mostrar: function () {
            var city = $("#city").val();
            console.log(city);
            var valores;
            var info;
            
            $.get('/clima/' + city, function (data) {
                console.log(data);
                info = JSON.stringify(data.data, null, '\t');
                valores = JSON.parse(data);

                initMap2(valores.coord.lat,valores.coord.lon);
                
                console.log(valores.coord);
                $("#getResult2").empty();
                $("#getResult2").append("<pre>" + "Longitud: "+valores.coord.lon + "\n" + "Latitud: "+valores.coord.lat + "</pre>");
                $("#getResult2").append("<pre>" + "Descripcion Clima: "+valores.weather[0].description + "\n" +"Description Main: "+ valores.weather[0].main + "</pre>");
                $("#getResult2").append("<pre>" + "Temperatura: "+valores.main.temp + "\n" + "Presion: "+valores.main.pressure + "\n" + "Humedad: "+valores.main.humidity + "</pre>");
                $("#getResult2").append("<pre>" + "Nemocico: "+ valores.sys.country + "\n" + "Sunrise: "+valores.sys.sunrise + "</pre>");
            });

        },

    }
})();





