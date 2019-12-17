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




    let hb = new Product('Crazy Moose',500,'Finaste HB filtrerat genom älgskägg','../img/produktbilder/dryck/dunk.jpg','ol');
    let explorer = new Product('Explorer',150,'Från Tyskland','../img/produktbilder/dryck/explorer.jpg','fin');
    let egetsnus = new Product('Göre själv',100,'Inte så jävla gott, men billigt','../img/produktbilder/tobak/egetsnus2.jpg','snus');
    let ettan = new Product('Ettan',43,'Ett gott snus','../img/produktbilder/tobak/ettan2.png','snus');
    let snokedja = new Product('Snökedja',1000,'Kör fö fa-an','../img/produktbilder/snow/snokedja2.jpg','snow');
    let norrlands = new Product('Norrlands Guld',200,'Vid köp av tio flak, får du ett "Göre själv" snus-paket!','../img/produktbilder/dryck/norrlands.png','ol');
    let kung = new Product('Kung', 12, 'KUNG', '../img/produktbilder/dryck/kung2.jpg','ol');
    let karhu = new Product('Karhu',10,'Björn-öl','../img/produktbilder/dryck/karhu.jpg','ol');
    let lapin = new Product('Lapin Kulta', 12, "Passar bra till ren", "../img/produktbilder/dryck/lapinkulta2.jpg",'ol');
    let absolut = new Product('Absolut', 399,'Guldbröllop-fin', '../img/produktbilder/dryck/absolut2.jpg','fin');
    let finhb = new Product('Authentic Burnwine by KoN', 1337, 'Renare HB än detta hittar du inte','../img/produktbilder/dryck/finHB.jpg','hem');
    let krut = new Product("Krut-Conny's Värsta", 50, "Garanterat fart på festen", '../img/produktbilder/dryck/conny.jpg','hem');
    let koskenkorva = new Product('Koskenkorva Vargtass', 299, 'Fint ska de va', '../img/produktbilder/dryck/vargtass.jpg','fin');
    products = [norrlands, kung, karhu, explorer, hb, lapin, krut, finhb, koskenkorva, absolut, snokedja, ettan, egetsnus];
    
    

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
        let total=0;
        localStorage.setItem('cart', JSON.stringify(cart));
        for (let i=0; i<cart.length; i++) {
        total+=cart[i].amount;
                }
        $('.badge').html(total);
    }





    // function renderCart(){
    //     localStorage.setItem('cart', JSON.stringify(cart));
    //     let babo = localStorage.getItem('cart');
    //     let bobo = JSON.parse(babo);
    //     for (let i = 0; i < bobo.length; i++) {
    //         const total = bobo[i].amount += 0;
    //     }
    //     // $('.badge').html(total);
    // }
    
    $(products).each(function(i){
        console.log(products[i].category);


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
        });
        newDiv.append(plusButton);
    

        // let deleteButton = $('<button>').addClass('deletebutton fas fa-minus');
        // deleteButton.on('click', function() {
        //     removeItemFromCart(products[i]);
        // });
        // newDiv.append(deleteButton);
        // deleteButton.html("wasdet");
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

    // function removeItemFromCart(targetProduct) {

    //     cart.forEach(function(item, index) {
    //         if(item.product.name === targetProduct.name) {
    //             if(item.amount > 1) {
    //                 item.amount--;
    //             } else {
    //                 cart.splice(index, 1);
    //             }
    //         }
    //     });
    
    //     renderCart();
    // }

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
    
    renderCart();
}

$(".close").on("click", function() {

    updateCart();

    $("#divmodal, .innerModal").removeClass("active");
}); 

function removeProduct(productToDelete) {

    modalContent.forEach(function(item, index) {
        
        console.log(cart);
        console.log(productToDelete);
        if(item.product.name === productToDelete.product.name) {
            renderCart();
            if(item.amount > 1) {
                console.log('minus')
                console.log(item.amount);
                productToDelete.amount--;
                // item.amount--;
            } else {
                modalContent.splice(index, 1);
                cart.splice(index, 1);
                console.log('hej');
                
            }
        }
    });
    localStorage.setItem('cart', JSON.stringify(modalContent));    
    updateCart();
    // renderCart();
}

renderCart();

})
function specificProduct(data) {


    $(".specificproduct").slideToggle();
}



