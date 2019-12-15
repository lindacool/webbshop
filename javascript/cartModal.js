$(document).ready(function() {

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
        console.log(sum);
        console.log(modalContent[i].product.price);
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
        console.log(item.product.name);
        console.log(productToDelete.product.name);
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

});


function renderModalCart(){
    
    
    localStorage.setItem('cart', JSON.stringify(modalContent));
    // $('.deletebutton').click();
}