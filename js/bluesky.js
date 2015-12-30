$(document).ready(function() {

});

$(window).load(function() {
  // Set active navigation item
  var url = window.location.pathname;
  $('.header ul.nav a[href="' + url + '"]').parent().addClass('active');
});

$('input#name').on('input', function() {
  var form = $(this).closest('form');
  var subjectInput = $(form).find('input#subject');
  var newSubject = $(this).val() + ': ' + $(subjectInput).attr('data-value');
  $(subjectInput).val(newSubject)
});
