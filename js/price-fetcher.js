document.addEventListener("DOMContentLoaded", function(){
    fetch();
});
function fetch() {
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BCH-USDT",
        "method": "GET",
        "headers": {
            "X-Requested-With": "XMLHttpRequest",
            "cache-control": "no-cache",
            "Accept": "*/*"
        }
    }
    $.ajax(settings).done(function (response) {
        changeValues(response.data.price);
    });
}

function changeValues(price) {
    $("#price").html(price);
}
