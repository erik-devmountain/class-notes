//always wrap all code in this
$(document).ready(function() {

  $('#submit').on('click', function() {
    var name = $('#name').val();
    var markup = "<li class='listItem'>" + "<i class='fa fa-bell'></i>" + name + "</li>";
    $('.listInBox').prepend(markup);
    $('#name').val('');
  });

  //have to select ancestor for dynamically created items
  $('.listInBox').on('click', '.listItem', function() {
    console.log('remove item triggered');
    $(this).remove();
  });


  // $('.box').on('mouseenter', function() {
  //   $('.box').css('background', '#e74c3c');
  // })

  // $('.box').on('mouseleave', function() {
  //   $('.box').css('background', '#eee');
  // })

  // var markup = $('<p>Trogdor!</p>');

  // $('.box').append(markup);

  // $('.one').on('click', function() {
  //   console.log(this + 'has been removed');
  //   this.remove();
  // });

  // $('.two').on('click', function() {
  //   this.remove();
  // });

  // $('.three').on('click', function() {
  //   this.remove();
  // });

  // $('.four').on('click', function() {
  //   this.remove();
  // });


});