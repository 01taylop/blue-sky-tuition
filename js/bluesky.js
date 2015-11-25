$(document).ready(function() {

});

$(window).load(function() {
  // Set active navigation item
  var url = window.location.pathname;
  console.log(url);
  $('.header ul.nav a[href="'+ url +'"]').addClass('active');
});
