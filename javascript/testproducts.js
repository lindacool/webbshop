$(document).ready(function() {

    $("#basket").on("click", updateCart);


    $('.js-filter').on('click', function() {
        filterProducts()
    });
   
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

    function Button(id,el) {
        this.id = id;
        this.element = el;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];




    let hb = new Product('Crazy Moose',500,'<b>10L</b> HB filtrerat genom älgskägg','../img/produktbilder/dryck/dunk.jpg','ol');
    let explorer = new Product('Explorer',150,'<b>70CL </b>Från Tyskland','../img/produktbilder/dryck/explorer.jpg','fin');
    let egetsnus = new Product('Göre själv',100,'Inte så jävla gott, men billigt','../img/produktbilder/tobak/egetsnus2.jpg','snus');
    let ettan = new Product('Ettan',29,'Ett gott snus','../img/produktbilder/tobak/ettan2.png','snus');
    let snokedja = new Product('Snökedja',1000,'Kör fö fa-an','../img/produktbilder/snow/snokedja2.jpg','snow');
    let norrlands = new Product('Norrlands Guld',200,'<b>24x33CL</b> Vid köp av tio flak, får du ett "Göre själv" snus-paket!','../img/produktbilder/dryck/norrlandsguld.jpg','ol');
    let kung = new Product('Kung', 12, '<b>50CL</b> KUNGEN dysh dysh dysh', '../img/produktbilder/dryck/kung2.jpg','ol');
    let karhu = new Product('Karhu',10,'<b>33CL</b> Björn-öl','../img/produktbilder/dryck/karhu.jpg','ol');
    let lapin = new Product('Lapin Kulta', 12, '<b>50CL</b> Passar bra till ren', '../img/produktbilder/dryck/lapinkulta2.jpg','ol');
    let absolut = new Product('Absolut', 200,'<b>100CL</b> Guldbröllop-fin', '../img/produktbilder/dryck/absolut2.jpg','fin');
    let finhb = new Product('HB by KON', 999, '<b>50CL</b> Renare HB än detta hittar du inte','../img/produktbilder/dryck/finHB.jpg','hem');
    let krut = new Product("Krut-Conny's", 50, "<b>5L</b> Garanterat fart på festen", '../img/produktbilder/dryck/conny.jpg','hem');
    let koskenkorva = new Product('Vargtass', 199, '<b>70CL</b> Fint ska de va', '../img/produktbilder/dryck/vargtass.jpg','fin');
    products = [norrlands, kung, karhu, explorer, hb, lapin, krut, finhb, koskenkorva, absolut, snokedja, ettan, egetsnus];
    
    let ol = new Button('ol',$('.js-ol'));
    let fin = new Button('fin',$('.js-fin'));
    let hem = new Button('hem',$('.js-hem'));
    let kaffe = new Button('ol',$('.js-kaffe'));

    let buttons = [ol, fin, hem, kaffe];

    function filterProducts() {
        $(buttons).each(function(i) {
            console.log(buttons[i]);
        })
    }



    

    function renderCart(){
        let total=0;
        let badgeCount = JSON.parse(localStorage.getItem('cart')) || 0;
        for (let i=0; i<badgeCount.length; i++) {
        total+=badgeCount[i].amount;
                }
        $('.badge').html(total);
    }


    renderCart();


    $(products).each(function(i){

        
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

        $('#product-wrapper').append(newDiv);
    });
    
   
    function addItemToCart(targetProduct) {

        if(localStorage.getItem('cart')) {
            let getData = [];
            getData = localStorage.getItem('cart');
            cart = JSON.parse(getData);
        }

        let foundProduct = false;
        cart.forEach(function(item) {
            if(item.product.name === targetProduct.name) {
                foundProduct = true;
                item.amount++;
            }
        });

        if(foundProduct === false) {
            cart.push(new ProductInCart(targetProduct,1));

        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        basketCart();

    }




    function updateCart() {
    $('#modalcontent').html('');

    let getData = [];
    getData = localStorage.getItem('cart');
    modalContent = JSON.parse(getData);
    $(modalContent).each(function(i) {
        
        let checkoutItems = $('<div>').addClass('listcontainer');

        $(checkoutItems).append([
            $("<img>").attr('src', modalContent[i].product.img).addClass('modalimg')
        ]);
        $(checkoutItems).append([
            $("<span>").html(`${modalContent[i].amount} x `).addClass('modalamount')
        ]);
        $(checkoutItems).append([
            $("<span>").html(`${modalContent[i].product.name}`).addClass('modalnameprice')
        ]);
        $(checkoutItems).append([
            $("<span>").html((modalContent[i].amount)*(modalContent[i].product.price)).addClass('modaltotprice')
        ]);

        $(checkoutItems).append([
            $('<i>').addClass('addbutton fas fa-plus').on('click', function() {
                modalContent[i].amount++;
                localStorage.setItem('cart', JSON.stringify(modalContent));
                renderCart();
                updateCart();
            })
        ])
        $(checkoutItems).append([
            $("<span>").html('/').addClass('forwardslash')
        ]);
        $(checkoutItems).append([
            $('<i>').addClass('deletebutton fas fa-minus').on('click', function() {
                removeProduct(modalContent[i])
            })
        ])


        $('#modalcontent').append(checkoutItems);
 
       
    })
    let sum = 0;
    $(modalContent).each(function(i) {
        sum += (modalContent[i].amount) * (modalContent[i].product.price);
    })
    let sumAndcheckout = $('<div>').addClass('sumandcheckout');
    $(sumAndcheckout).append([
        $('<span>').html(`Din total summa:  ${sum}`).addClass('totalprice')
    ])
    $(sumAndcheckout).append([
        $('<span>').html('Till kassan').addClass('gotocheckout').on('click', function() {
            window.location.href = '../html/checkout.html'
        })
    ])
    $('#modalcontent').append(sumAndcheckout);
    
    $("#divmodal, .innerModal").addClass("active");
    

}

$(".close").on("click", function() {
    // localStorage.setItem('cart', JSON.stringify(modalContent));    
    $("#divmodal, .innerModal").removeClass("active");
    basketCart()

}); 

    function removeProduct(productToDelete) {
        modalContent.forEach(function(item, index) {
            if(item.product.name === productToDelete.product.name) {
                if(item.amount > 1) {
                    item.amount--;

                } else {
                    modalContent.splice(index, 1);
                    cart.splice(index, 1);

                    
                }
            }
            
        });
        localStorage.setItem('cart', JSON.stringify(modalContent));    
        updateCart();
        renderCart();
        basketCart();
    }

    //VARUKORG AT KASSASIDA
    function basketCart(){
    $('#basketcheckoutcart').html("");
    let basketCart = JSON.parse(localStorage.getItem('cart'));

    $(basketCart).each(function(i) {
        
        let checkoutItems = $('<div>').addClass('checkoutlists');

        $(checkoutItems).append([
            $("<img>").attr('src', basketCart[i].product.img).addClass('checkoutmodalimg')
        ]);
        $(checkoutItems).append([
            $("<span>").html(`${basketCart[i].amount} x `).addClass('checkoutmodalamount')
        ]);
        $(checkoutItems).append([
            $("<span>").html(`<b>${basketCart[i].product.name}</b>`).addClass('checkoutmodalnameprice')
        ]);
        $(checkoutItems).append([
            $("<span>").html((basketCart[i].amount)*(basketCart[i].product.price)+' kr').addClass('checkoutmodaltotprice')
        ]);
        $('#basketcheckoutcart').append(checkoutItems);
 
       
    })
    let sum = 0;
    $(basketCart).each(function(i) {
        sum += (basketCart[i].amount) * (basketCart[i].product.price);
    })
    let sumAndcheckout = $('<div>').addClass('sumandcheckout');
    $(sumAndcheckout).append([
        $('<span>').html(`<b>Din total summa:  ${sum} kr</b>`).addClass('checkouttotalprice')
    ])

    $('#basketcheckoutcart').append(sumAndcheckout);
    }
    
    basketCart();
})



