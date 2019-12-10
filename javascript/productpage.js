$(document).ready(function() {
    // nav
    
    $('#prodbtn').on('click', createProduct);   

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
    let karhu = new Product('Karhu',10,'Björn-öl','../img/karhu.jpg')

    let drinkingProducts = [norrlands, karhu, explorer, hb];
    let tobaccoProducts = [egetsnus, ettan];
    let winterProducts = [snokedja];

    let cart = [];
    let storage = [];

    let amountCount = [];

    $(drinkingProducts).each(function(i, x){
        console.log(x);
        let newDiv = $('<div>').addClass('productcontainer');
        let productName = $('<span>').html(drinkingProducts[i].name);
        productName.addClass('productname');
        newDiv.append(productName);
        let productImg = $('<img>');
        productImg.attr('src', drinkingProducts[i].img);
        productImg.addClass('productimg');
        productImg.on("click", function(){
            storage.push(drinkingProducts[i]);
            // putInStorage();

            location.href = 'specificproduct.html';
        });
        newDiv.append(productImg);
        let productPrice = $('<span>').html(`${drinkingProducts[i].price} kr`);
        productPrice.addClass('productprice');
        newDiv.append(productPrice);
        let productDescription = $('<span>').html(drinkingProducts[i].description);
        productDescription.addClass('productdescription');
        let newButton = $('<i>').addClass('fas fa-plus');
        newDiv.append(productDescription);
        newDiv.append(newButton);
        $('#product-wrapper').append(newDiv);  
        amountCount[drinkingProducts[i].name] = 0;
        newButton.on('click', function(){
            amountCount[drinkingProducts[i].name] += 1;
            cart.push(new ProductInCart(drinkingProducts[i],0));
            // putInStorage();
            pushToCart(drinkingProducts[i]);
            // let babo = localStorage.getItem('stringCart');
            // let boba = JSON.parse(babo);
            // $('#cart-items').text(boba.length);
            console.log(amountCount);
        });
        let deleteButton = $('<button>');
        newDiv.append(deleteButton);
        deleteButton.on('click', function () {
            amountCount[drinkingProducts[i].name] -= 1;
            cart.splice(i, 1);
            $('#cart-items').html(cart.length);
            console.log(cart);
            putInStorage();
        });
    });
    

    function putInStorage() {
        let stringStorage = JSON.stringify(storage);
        let cartStringify = JSON.stringify(cart);
        localStorage.clear('product');
        localStorage.setItem('product', stringStorage);
        localStorage.setItem('stringCart', cartStringify);
    }

    function ProductInCart(p,a) {
        this.product = p;
        this.amount = a;
    }


    
    function pushToCart(productsToAdd){
        $(cart).each(function(i){
            if(cart[i].product.name === productsToAdd.name) {
                cart[i].amount ++;
            } else {
            // addProduct = new ProductInCart(productsToAdd, ett);
            // cart.push(addProduct); 
            }
        });
        console.log(cart);
        console.log(cart[0].product.name);

    }
    function createProduct() {
    function createProduct(produc) {
        let prodName = $('#prodname').val();
        let prodPrice = parseInt($('#prodprice').val());
        let ProdDescr = $('#proddescr').val();
        let imgUrl = '../img/'+$('#imgurl').val();
        let newProduct = new Product(prodName,prodPrice,ProdDescr,imgUrl)

        drinkingProducts.push(newProduct);
        localStorage.setItem('newproduct', newProduct);    
        console.log(newProduct);
        console.log(drinkingProducts);   
    }
    
    

})

