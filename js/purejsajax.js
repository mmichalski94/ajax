// vanilla js = pure js

'use strict';

function ajax(ajaxOptions) {
    var options = {
        type: ajaxOptions.type || "GET",
        url: ajaxOptions.url || "",
        onSuccess: ajaxOptions.onSuccess || function () {}, //pusta funkcja zapobiega błędom
        onError: ajaxOptions.onError || function () {},
        dataType: ajaxOptions.dataType || 'text'
    }; //obiekt deklarujemy nawasem kwadratowym

    function httpSuccess(httpReqest) {
        try {
            return (httpReqest.status >= 200 && httpReqest.status < 300 || httpReqest.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof httpReqest.status == 'undefined');
        } catch (err) {
            return false;
        }
    }

    var httpReq = new XMLHttpRequest();


    httpReq.open(options.type, options.url, true);

    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4) {
            if (httpSuccess(httpReq)) {

                var returnData = (options.dataType == 'xml') ? httpReq.responseXML : httpReq.responseText;

                options.onSuccess(returnData);
            } else {
                options.onError(httpReq.statusText);
            }
        }

    }

    httpReq.send();
}

ajax({
    type: "GET",
    url: 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
    onSuccess: function (response) {
        console.log('Hurra! Pobrałem dane' + response);
    },
    onError: function (status) {
        alert('Połączenie o statusie ' + status);
    }
})
