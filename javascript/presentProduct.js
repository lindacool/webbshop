$(document).ready(function() {

    let moreInfo = localStorage.getItem('product');
    let productInfo = JSON.parse(moreInfo);

    $("#title").text("KoN:" + " " + productInfo[0].name);
    $(".product-img").append([
        $("<img>", {"src": productInfo[0].img, "alt": productInfo[0].name})
    ]);
    $(".product-title").append([
        $("<h3>").text(productInfo[0].name)
    ]);
    $(".product-info").append([
        $("<span>").text(productInfo[0].description)
    ]);
    $(".product-price").append([
        $("<h3>").text(productInfo[0].price)
    ]);

    let babo = localStorage.getItem('stringCart');
    let boba = JSON.parse(babo);
    $('#cart-items').text(boba.length);
    console.log(boba);

});