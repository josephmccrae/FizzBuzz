$(document).ready(function() {
        
    for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) {
        $('#main').append('<span class="fizzBuzz"><p>Fizz Buzz</p></span>');
    } else if (i % 3 == 0) {
        $('#main').append('<span class="buzz"><p>Buzz</p></span>');
    } else if (i % 5 == 0) {
        $('#main').append('<span class="fizz"><p>Fizz</p></span>');
    } else {
        $('#main').append('<span class="numbers"><p>' + i + "</p></span>");
        } 
    $('span').hide();
        
     $(function() {
     setInterval(function () {
      $('span').each(function (i) {

    $(this).delay((i++) * 100).fadeTo(1000, 1); 
    });
     }, 100);
     });
    
    }

 }); 
    
    


    
    
