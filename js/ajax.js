'use strict';
document.getElementsByTagName('button')[0].onclick = function () {
    // zwracana jest kolekcja elementów [0] dodajemy, żeby wybrać konkretny button
    var dane = new XMLHttpRequest();


    dane.open('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', true);

    dane.onreadystatechange = function () {


        if (dane.readyState == 4 && (dane.status >= 200 && dane.status < 300 || dane.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof dane.status == 'undefined')) {
            //tutaj wykonujemy operacje na danych

            var pobraneDane = dane.responseText;
            //console.log(typeof(pobraneDane));

            var jsonObj = JSON.parse(pobraneDane);

            console.log(jsonObj);

            var parId = document.createElement('p');
            var parName = document.createElement('p');
            var parURL = document.createElement('p');

            parId.innerHTML = "User ID " + jsonObj.userId;
            parName.innerHTML = "User Name " + jsonObj.userName;
            parURL.innerHTML = "User URL " + jsonObj.userURL;

            document.body.appendChild(parId);
            document.body.appendChild(parName);
            document.body.appendChild(parURL);

            //po zakończeniu operacji usuń obietk
            dane = null;

        }
    }
    dane.send();
}

// Ajax w jQuery
$('button').eq(1).click(function(){
    $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(dane){
        
        console.log(dane);
        var parId = document.createElement('p');
            var parName = document.createElement('p');
            var parURL = document.createElement('p');

            parId.innerHTML = "User ID " + dane.userId;
            parName.innerHTML = "User Name " + dane.userName;
            parURL.innerHTML = "User URL " + dane.userURL;

            document.body.appendChild(parId);
            document.body.appendChild(parName);
            document.body.appendChild(parURL);
    });
});
//document.getElementsByTagName('button')[1].onclick = function () {}