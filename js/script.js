$(document).ready(function() {
  


$('.image').each(function(){
  var el = $(this);
  var color = '#'+Math.floor(Math.random()*16777215).toString(16);
  el.css({
    'background':color        
  });
  
});

$('.grid').isotope({
  // options
  itemSelector: '.el',
  percentPosition: true,
  masonry: {
    columnWidth: '.el',
    gutter: 10
  },
  transitionDuration: '0.3s',
  hiddenStyle: {
    opacity: 0
  },
  visibleStyle: {
    opacity: 1
  }
});


$(window).on("debouncedresize", function( event ) {
    console.log($( window ).width() );
});


$('select').change(function(){
  var value = $(this).val()
  value = "." + value
  $('.grid').isotope({ filter: value })
  
});

});