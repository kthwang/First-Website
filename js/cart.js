$('#icon').on('click', function(){
  $('nav').hide();
})

$('div').on('click', function(){
  $('nav').hide().fadeIn(3000);
});

$('.firstname').focus();

$('fieldset').hide().slideDown(4000);
