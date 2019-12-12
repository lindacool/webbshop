$(document).ready(function() {

    function Product(n,p,d,i) {
        this.name = n;
        this.price = p;
        this.description = d;
        this.img = i;
    }
    
    function ProductInCart(p,a) {
        this.product = p;
        this.amount = a;
    }

    let amountCount = 0;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let hb = new Product('Crazy Moose',500,'Finaste HB filtrerat genom älgskägg','../img/dunk.jpg');
    let explorer = new Product('Explorer',150,'Från Tyskland','../img/explorer.jpg')
    let egetsnus = new Product('Göre själv',100,'Inte så jävla gott, men billigt','../img/egetsnus.jpg');
    let ettan = new Product('Ettan',43,'Ett gott snus','../img/ettan.jpg');
    let snokedja = new Product('Snökedja',1000,'Kör fö fa-an','../img/snokedja.jpg')
    let norrlands = new Product('Norrlands Guld',200,'Vid köp av tio flak, får du ett "Göre själv" snus-paket!','../img/norrlands.png')
    let karhu = new Product('Karhu',10,'Björn-öl','../img/karhu.jpg')

    let drinkingProducts = [norrlands, karhu, explorer, hb];

    //function renderCart() {

    //     cart.forEach(function(item) {
    //         const p = $('<p>')
    //         $(p).on("click", function() {removeItemFromCart(item.name)})
    //         cart.push($(p).text(`${item.name} x ${item.amount}`))

    //     })
    //     for (let i = 0; i < cart.length; i++) {
    //         $(".js-cart").html(cart[i])
            
    //     }

    // }
    
    function renderCart(){
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    $(drinkingProducts).each(function(i){

        amountCount[drinkingProducts[i].name] = 0;
        
        let newDiv = $('<div>').addClass('productcontainer');
        let productName = $('<span>').html(drinkingProducts[i].name);
        productName.addClass('productname');
        newDiv.append(productName);

        let productImg = $('<img>');
        productImg.attr('src', drinkingProducts[i].img);
        productImg.attr('alt', drinkingProducts[i].name);
        productImg.addClass('productimg');
        newDiv.append(productImg);

        let productPrice = $('<span>').html(`${drinkingProducts[i].price} kr`);
        productPrice.addClass('productprice');
        newDiv.append(productPrice);

        let productDescription = $('<span>').html(drinkingProducts[i].description);
        productDescription.addClass('productdescription');
        newDiv.append(productDescription);

        let plusButton = $('<i>').addClass('plusbutton fas fa-plus');
        plusButton.on('click', function(){
            addItemToCart(drinkingProducts[i]);
            amountCount += 1;
        });
        newDiv.append(plusButton);

        let deleteButton = $('<button>').addClass('deletebutton fas fa-minus');
        deleteButton.on('click', function() {
            removeItemFromCart(drinkingProducts[i]);
        });
        newDiv.append(deleteButton);
        deleteButton.html("wasdet");
        $('#product-wrapper').append(newDiv);
    });
    
   

    function addItemToCart(targetProduct) {

        
        let foundProduct = false;
        cart.forEach(function(item) {
            console.log('item.product.name =' + item.product.name);
            // console.log(cart);
            if(item.product.name === targetProduct.name) {
                foundProduct = true;
                item.amount++;
            }
    
            // const matchingItem = cart.find(function(item) {
            //     return item.name === targetName
            // })
    
            
        });

        if(foundProduct === false) {
            cart.push(new ProductInCart(targetProduct,1));

        }

        renderCart();

    }

    function removeItemFromCart(targetProduct) {

        cart.forEach(function(item, index) {
            if(item.product.name === targetProduct.name) {
                if(item.amount > 1) {
                    item.amount--;
                } else {
                    cart.splice(index, 1);
                }
            }
        });
    
        renderCart();
    }




renderCart();

})
function specificProduct(data) {


    $(".specificproduct").slideToggle();
}




