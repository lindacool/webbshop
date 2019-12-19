$(document).ready(function() {

    $('.js-ol').on('click', function() {
        
    
    })
    $('.deer').on('click', function() {
        window.location.href ='../index.html';
    })

    $('.listcontainer').on('click', function() {
        $(".tabletdropdowncontainer").slideToggle();
    })

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

})