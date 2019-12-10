$(document).ready(function() {

    $("#agebutton").on('click', function(){
        var day = $("#day").val();
        var month = $("#month").val();
        var year = $("#year").val();
        var age = 15;
        var mydate = new Date();
        console.log(mydate);
        mydate.setFullYear(year, month-1, day);
        console.log(mydate);
        
    
        var currdate = new Date();
        
        currdate.setFullYear(currdate.getFullYear() - age);
        if ((currdate - mydate) < 0){
            console.log('nej');
            alert(`Ledsen, man måste vara ${age} år eller äldre för att besöka hemsidan.`);
            window.location.replace('https://www.lekia.se/')
        } else {
        window.location.replace('../index.html');
        }

    });

})
