//functionality for materialize
$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.tabs').tabs();
  $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy();
});

$('.main-carousel').flickity({
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  autoPlay: true
});



