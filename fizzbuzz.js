$(document).ready(function() {
    
    $('input').keydown(function (enter) {    
      if (enter.keyCode == 13) {
          $('.numbers').remove();         
          var j = $('input').val();
    
      for (var i = 1; i <= j; i++) {
        if (i % 15 == 0) {
          $('#main').append('<span id="fizzBuzz" class="numbers"><p class="numTxt">FIZZ BUZZ</p></span>');
        } else if (i % 3 == 0) {
          $('#main').append('<span id="buzz" class="numbers"><p class="numTxt">Buzz</p></span>');
        } else if (i % 5 == 0) {
          $('#main').append('<span id="fizz" class="numbers"><p class="numTxt">Fizz</p></span>');
        } else {
          $('#main').append('<span id="reg" class="numbers"><p class="numTxt">' + i + "</p></span>");
        } 
      $('.numbers').hide();  
      }
    }
 
    $(function() {
      setInterval(function () {
      $('.numbers').each(function (i) {

      $(this).delay((i++) * 50).fadeTo(50, 1); 
      });
        }, 100);
    });  
  });
}); 

                     


        

    
  
