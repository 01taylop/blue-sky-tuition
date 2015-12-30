$(document).ready(function() {

});

$(window).load(function() {
  // Set active navigation item
  var url = window.location.pathname;
  $('.header ul.nav a[href="'+ url +'"]').parent().addClass('active');
});

$('#consultationEmailForm').on('submit', function(e) {
  e.preventDefault();
  console.log('consultation');
});

$('#tutorEmailForm').on('submit', function(e) {
  e.preventDefault();
  console.log('tutor');
});

$('#contactEmailForm').on('submit', function(e) {
  e.preventDefault();
  console.log('contact');
});

var emailFn = {
  sendMail: function() {

  }
}
