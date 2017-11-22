$('.add-item').click(function(e) {
  var popup = $('.window');

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

$('.js_submit_btn').click(function(e) {
  var attrs = {
    id: $('.js_attrs').val(),
  };
  console.log(attrs);
  $('.window').addClass('hidden');
  $(document).unbind('click.myEvent');
});
var attrs = {
  id: $('.js_attrs').val(),
};
var item = new Item({id: attrs})
item.save();
console.log(item);
