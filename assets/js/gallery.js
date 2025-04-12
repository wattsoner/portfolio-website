$(document).ready(function(){
    var $images = $('.gallery-image');
    var currentIndex = 0;
    
    $images.hide();
    $images.eq(currentIndex).show();
    
    $('.gallery-next').click(function(){
      $images.eq(currentIndex).fadeOut(300, function(){
        currentIndex = (currentIndex + 1) % $images.length;
        $images.eq(currentIndex).fadeIn(300);
      });
    });
    
    $('.gallery-prev').click(function(){
      $images.eq(currentIndex).fadeOut(300, function(){
        currentIndex = (currentIndex - 1 + $images.length) % $images.length;
        $images.eq(currentIndex).fadeIn(300);
      });
    });
  });
  