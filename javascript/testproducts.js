$(document).ready(function() {
    $('.js-ol').on('click', )
// Bör få en femte parameter category
    function Product(n,p,d,i,c) {
        this.name = n;
        this.price = p;
        this.description = d;
        this.img = i;
        this.category = c;
    }
    
    function ProductInCart(p,a) {
        this.product = p;
        this.amount = a;
    }

    let amountCount = 0;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let hb = new Product('Crazy Moose',500,'Finaste HB filtrerat genom älgskägg','../img/dunk.jpg','hem');
    let explorer = new Product('Explorer',150,'Från Tyskland','../img/explorer.jpg','fin')
    let egetsnus = new Product('Göre själv',100,'Inte så jävla gott, men billigt','../img/egetsnus.jpg','snus');
    let ettan = new Product('Ettan',43,'Ett gott snus','../img/ettan.jpg','snus');
    let snokedja = new Product('Snökedja',1000,'Kör fö fa-an','../img/snokedja.jpg','sno')
    let norrlands = new Product('Norrlands Guld',200,'Vid köp av tio flak, får du ett "Göre själv" snus-paket!','../img/norrlands.png','ol')
    let karhu = new Product('Karhu',10,'Björn-öl','../img/karhu.jpg','ol')

    let products = [norrlands, karhu, explorer, hb, egetsnus, ettan, snokedja];

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
        let babo = localStorage.getItem('cart');
        let bobo = JSON.parse(babo);
        for (let i = 0; i < bobo.length; i++) {
            const total = bobo[i].amount += 0;
        }
        $('.badge').html(total);
    }
    
    $(products).each(function(i){

        amountCount[products[i].name] = 0;
        
        let newDiv = $('<div>').addClass('productcontainer');
        let productName = $('<span>').html(products[i].name);
        productName.addClass('productname');
        newDiv.append(productName);

        let productImg = $('<img>');
        productImg.attr('src', products[i].img);
        productImg.attr('alt', products[i].name);
        productImg.addClass('productimg');
        newDiv.append(productImg);

        let productPrice = $('<span>').html(`${products[i].price} kr`);
        productPrice.addClass('productprice');
        newDiv.append(productPrice);

        let productDescription = $('<span>').html(products[i].description);
        productDescription.addClass('productdescription');
        newDiv.append(productDescription);

        let plusButton = $('<i>').addClass('plusbutton fas fa-plus');
        plusButton.on('click', function(){
            addItemToCart(products[i]);
            amountCount += 1;
        });
        newDiv.append(plusButton);

        let deleteButton = $('<button>').addClass('deletebutton fas fa-minus');
        deleteButton.on('click', function() {
            removeItemFromCart(products[i]);
        });
        newDiv.append(deleteButton);
        deleteButton.html("wasdet");
        $('#product-wrapper').append(newDiv);
    });
    
   

    function addItemToCart(targetProduct) {

        let foundProduct = false;
        cart.forEach(function(item) {
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

    $("#basket").on("click", updateCart);
function updateCart() {
    $('#modalcontent').html('');

    

    let getData = localStorage.getItem('cart');
    modalContent = JSON.parse(getData);
    $(modalContent).each(function(i) {
        
        let modalProduct = $('<div>').addClass('listcontainer');

        $(modalProduct).append([
            $("<img>").attr('src', modalContent[i].product.img).addClass('modalimg')
        ]);
        $(modalProduct).append([
            $("<span>").html(`${modalContent[i].amount} x `).addClass('modalamount')
        ]);
        $(modalProduct).append([
            $("<span>").html(`${modalContent[i].product.name}  ${modalContent[i].product.price} kr`).addClass('modalnameprice')
        ]);
        $(modalProduct).append([
            $("<span>").html((modalContent[i].amount)*(modalContent[i].product.price)+'<br>').addClass('modaltotprice')
        ]);
        $(modalProduct).append([
            $('<i>').addClass('deletebutton fas fa-minus').on('click', function() {
                removeProduct(modalContent[i])
            })
        ])
        $('#modalcontent').append(modalProduct);
 
       
    })
    let sum = 0;
    $(modalContent).each(function(i) {
        sum += (modalContent[i].amount) * (modalContent[i].product.price);
    })
    $('#modalcontent').append([
        $('<span>').html(`Din total summa:  ${sum}`).addClass('totalprice')
    ])
    
    $("#divmodal, .innerModal").addClass("active");
    renderModalCart();
}

$(".close").on("click", function() {
    $("#divmodal, .innerModal").removeClass("active");
}); 

function removeProduct(productToDelete) {
    modalContent.forEach(function(item, index) {
        if(item.product.name === productToDelete.product.name) {
            if(item.amount > 1) {
                item.amount--;
            } else {
                modalContent.splice(index, 1);

            }
        }
    });
    renderModalCart();
    updateCart();
}



renderCart();

})
function specificProduct(data) {


    $(".specificproduct").slideToggle();
}

function renderModalCart(){
    
    
    localStorage.setItem('cart', JSON.stringify(modalContent));
    // $('.deletebutton').click();
}


