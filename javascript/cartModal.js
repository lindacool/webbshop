$(document).ready(function() {

$("#basket").on("click", function(){
    // $('.img-container').html('');
    // $('.quantity').html('');
    // $('.title').html('');
    $('.listcontainer').html('');

    

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
                removeItem(modalContent[i])
            })
        ])
        $('#modalcontent').append(modalProduct);
       
    })
    
    $("#divmodal, .innerModal").addClass("active");
    
});

$(".close, #divmodal").on("click", function() {
    $("#divmodal, .innerModal").removeClass("active");
}); 

});

function removeItem(targetProduct) {
    modalContent.forEach(function(item, index) {
        console.log(item.product.name);
        console.log(targetProduct.product.name);
        if(item.product.name === targetProduct.product.name) {
            if(item.amount > 1) {
                item.amount--;
            } else {
                modalContent.splice(index, 1);
            }
        }
    });

    renderModalCart();
}

function renderModalCart(){
    
    localStorage.setItem('cart', JSON.stringify(modalContent));
    // $('.deletebutton').click();
}