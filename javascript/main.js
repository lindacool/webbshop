$(document).ready(function() {


    function Product(n,p,d,i) {
        this.name;
        this.price;
        this.description;
        this.img;
    }
    let hb = new Product('Crazy Moose',500,'Finaste HB filtrerat genom vargskägg','img/dunk.jpg');
    let egetsnus = new Product('Göre själv',100,'Inte så jävla gott, men billigt','img/egetsnus.jpg');
    let ettan = new Product('Ettan',43,'Ett gott snus','img/ettan.jpg');

    let products = [hb, egetsnus, ettan];

    $(products).each(function(i){
        let newDiv = $('<div>');
        newDiv.addClass('productcontainer');
        let productName = $('<p>').html(products[i].name);
        productName.addClass('productname');
        newDiv.append(productName);
        let productImg = $('<img>');
        productImg.src = products[i].img;
        productImg.addClass('productimg');
        newDiv.append(productImg);
        let productPrice = $('<span>').html(products[i].price)
        productPrice.addClass('productprice');
        newDiv.append(productPrice);
        let productDescription = $('<p>').html(products[i].description);
        productDescription.addClass('productdescription');
        newDiv.append(productDescription);
        console.log(newDiv)
    });

})

