$('#show-item').on('click', function() {
  if ($(this).hasClass('ex')) {
    $('#awb-item-container li').removeClass('out')
    $(this).removeClass('ex')
  }
  else{
  $('#awb-item-container li').addClass('out')
  $(this).addClass('ex')
}
});
