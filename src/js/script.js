$('.add-item').click(function(e) {
  const popup = $('.window');

  if (popup.hasClass('hidden')) {
    popup.removeClass('hidden');

    let firstClick = true;
    $(document).bind('click.myEvent', function(e) {
      if (!firstClick && $(e.target).closest('.window').length === 0) {
        popup.addClass('hidden');
        $(document).unbind('click.myEvent');
      }
      firstClick = false;
    });
  }
  e.preventDefault();
});
$('.modal__close').click(function(e) {
  $('.window').addClass('hidden');
  $(document).unbind('click.myEvent');
});
