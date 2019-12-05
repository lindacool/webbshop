$(document).ready(function() {
    // nav
    $('#prodbtn').on('click', createProduct);
    $('.js-toggleMenu').on('click', function() {
        $(".js-menu").slideToggle();
        if($(".js-gunsMenu").css('display') == 'block') {
            $(".js-gunsMenu").slideToggle();
        }
        if($(".js-tobaccoMenu").css('display') == 'block') {
            $(".js-tobaccoMenu").slideToggle();
        }
        if($(".js-snowMenu").css('display') == 'block') {
            $(".js-snowMenu").slideToggle();
        }
        if($(".js-drinkMenu").css('display') == 'block') {
            $(".js-drinkMenu").slideToggle();
        }
    });

    $('.js-toggleDrink').on('click', function() {
        $(".js-drinkMenu").slideToggle();
        if($(".js-gunsMenu").css('display') == 'block') {
            $(".js-gunsMenu").slideToggle();
        }
        if($(".js-tobaccoMenu").css('display') == 'block') {
            $(".js-tobaccoMenu").slideToggle();
        }
        if($(".js-snowMenu").css('display') == 'block') {
            $(".js-snowMenu").slideToggle();
        }
    });

    $('.js-toggleSnow').on('click', function() {
        $(".js-snowMenu").slideToggle();
        if($(".js-gunsMenu").css('display') == 'block') {
            $(".js-gunsMenu").slideToggle();
        }
        if($(".js-tobaccoMenu").css('display') == 'block') {
            $(".js-tobaccoMenu").slideToggle();
        }
        if($(".js-drinkMenu").css('display') == 'block') {
            $(".js-drinkMenu").slideToggle();
        }
    });

    $('.js-toggleTobacco').on('click', function() {
        $(".js-tobaccoMenu").slideToggle();
        if($(".js-gunsMenu").css('display') == 'block') {
            $(".js-gunsMenu").slideToggle();
        }
        if($(".js-snowMenu").css('display') == 'block') {
            $(".js-snowMenu").slideToggle();
        }
        if($(".js-drinkMenu").css('display') == 'block') {
            $(".js-drinkMenu").slideToggle();
        }
    });

    $('.js-toggleGuns').on('click', function() {
        $(".js-gunsMenu").slideToggle();
        if($(".js-tobaccoMenu").css('display') == 'block') {
            $(".js-tobaccoMenu").slideToggle();
        }
        if($(".js-snowMenu").css('display') == 'block') {
            $(".js-snowMenu").slideToggle();
        }
        if($(".js-drinkMenu").css('display') == 'block') {
            $(".js-drinkMenu").slideToggle();
        }
        
    });

    // ($("#h1").css("color") == "rgb(0, 128, 0)")
    // slut nav




    function Product(n,p,d,i) {
        this.name = n;
        this.price = p;
        this.description = d;
        this.img = i;
    }
    let hb = new Product('Crazy Moose',500,'Finaste HB filtrerat genom älgskägg','../img/dunk.jpg');
    let explorer = new Product('Explorer',150,'Från Tyskland','../img/explorer.jpg')
    let egetsnus = new Product('Göre själv',100,'Inte så jävla gott, men billigt','../img/egetsnus.jpg');
    let ettan = new Product('Ettan',43,'Ett gott snus','../img/ettan.jpg');
    let snokedja = new Product('Snökedja',1000,'Kör fö fa-an','../img/snokedja.jpg')
    let norrlands = new Product('Norrlands Guld',200,'Vid köp av tio flak, får du ett "Göre själv" snus-paket!','../img/norrlands.png')
    

    let drinkingProducts = [hb, norrlands, explorer];
    let tobaccoProducts = [egetsnus, ettan];
    let winterProducts = [snokedja];

 

    $(drinkingProducts).each(function(i){
        let newDiv = $('<div>').addClass('productcontainer');
        let productName = $('<p>').html(drinkingProducts[i].name);
        productName.addClass('productname');
        newDiv.append(productName);
        let productImg = $('<img>');
        productImg.attr('src', drinkingProducts[i].img);
        productImg.addClass('productimg');
        newDiv.append(productImg);
        let productPrice = $('<span>').html(`${drinkingProducts[i].price} kr`);
        productPrice.addClass('productprice');
        newDiv.append(productPrice);
        let productDescription = $('<p>').html(drinkingProducts[i].description);
        productDescription.addClass('productdescription');
        newDiv.append(productDescription);
        console.log(newDiv);
        $('#product-wrapper').append(newDiv);
        console.log(drinkingProducts[i].img);
        
        
    });
    function createProduct() {
        let prodName = $('#prodname').val();
        let prodPrice = parseInt($('#prodprice').val());
        let ProdDescr = $('#proddescr').val();
        let imgUrl = '../img/'+$('#imgurl').val();
        let newProduct = new Product(prodName,prodPrice,ProdDescr,imgUrl)

        products.push(newProduct);
        
        console.log(products);
    }
    
})

