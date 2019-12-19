
$(document).ready(function() {

    let card = $("<input>");
    card.attr("type", "number");
    card.attr("class", "formcard");
    card.attr("id", "cardnumber");
    card.attr("placeholder", "Kortnummer");

    let mY = $("<input>");
    mY.attr("type", "number");
    mY.attr("class", "formcard");
    mY.attr("id", "m-y");
    mY.attr("placeholder", "13/37");

    let cvc = $("<input>");
    cvc.attr("type", "number");
    cvc.attr("class", "formcard");
    cvc.attr("id", "cvc");
    cvc.attr("placeholder", "CVC");
    
    let nameC = $("<input>");
    nameC.attr("type", "text");
    nameC.attr("class", "formcard");
    nameC.attr("id", "nameC");
    nameC.attr("placeholder", "Ander Andersson");
    $('#payment').append(card, mY, cvc, nameC);

    
    $('#img').click(function(){
        $('.pay').toggleClass('backcolor');
        $('#payment').slideToggle();
        
    })

    //För toggla ner div med form 
    $("#step1").click(function(){
        $("#stepsecond").slideToggle(500);
    })

    $('#done').on('click', function(event) {
        let email = $('#email').val();
        let name = $('#name').val();
        let adress = $('#adress').val();
        let city = $('#city').val();
        let zip = $('#zipcode').val();
        let cardnr = $('#cardnumber').val();
        let date = $('#m-y').val();
        let cvc = $('#cvc').val();
        let nameC = $('#nameC').val();
        event.preventDefault();

        let isValid = true;

        if(nameC.length < 3){
            $("#nameC").addClass('error');
            isValid = false;

        }

        if(cvc.length < 3){
            $("#cvc").addClass('error');
            isValid = false;
        }

        if(date.length < 3){
            $("#m-y").addClass('error');
            isValid = false;
        }

        if(cardnr.length < 3){
            $("#cardnumber").addClass('error');
            isValid = false;
        }

        if(email.length < 3){
            $("#email").addClass('error');
            isValid = false;
        }
        if(name.length < 3){
            $("#name").addClass('error'); 
            isValid = false;
        }
        if(adress.length < 3){
            $("#adress").addClass('error');
            isValid = false;
        }
        if(city.length < 3){
            $("#city").addClass('error');
            isValid = false;
        }
        if(zip.length < 3){
            $("#zipcode").addClass('error');
            isValid = false;
        }

        if(isValid) {
            $("#step3").slideToggle(1500);
            let max = Math.floor(Math.random()* 10000000000)
            $(".forminputs").removeClass('error');
            $('#done').addClass('confirmation');
            $('#done').removeClass('headers');
            $('#done').removeAttr('id');
            $("#result").html(max);
            let p = $('<p>').html(`<strong>You are a true KING OF NORRLAND</strong><br>Ett bekräftelsemail har skickats till: ${email}`);
            $(".king").append(p)  
        }
    });
})