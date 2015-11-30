$(document).ready(function() {

});

$(window).load(function() {
  // Set active navigation item
  var url = window.location.pathname;
  $('.header ul.nav a[href="'+ url +'"]').parent().addClass('active');
});
