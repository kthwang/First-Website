var $one = $('.one'), $two = $('.two'), $three = $('.three'), $four = $('.four'), $five = $('.five'), $six = $('.six'), $seven = $('.seven')

$one.on('mousemove', function(){
  $one.addClass('red');
})

$two.on('mousemove', function(){
  $two.addClass('orange');
})

$three.on('mousemove', function(){
  $three.addClass('yellow');
})

$four.on('mousemove', function(){
  $four.addClass('green');
})

$five.on('mousemove', function(){
  $five.addClass('blue');
})

$six.on('mousemove', function(){
  $six.addClass('navy');
})

$seven.on('mousemove', function(){
  $seven.addClass('purple');
})
//mouse move function(change color)


$('#icon').on('click', function(){
  $('nav').hide();
})

$('div').on('click', function(){
  $('nav').hide().fadeIn(3000);
})

//control navbar
$('.content').hide();
var $this = this.$('.page-header');

$this.on('click', $('.content').each(function(){
  $('.content').hide().show(6000);
}));
