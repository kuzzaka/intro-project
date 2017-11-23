var item = new Item();
var view = new PopupView({
  model: item,
  el: $('.add-item__view'),
});
var popup = $('.window');
closePopup = function() {
  $('.window').addClass('hidden');
  $(document).unbind('click.myEvent');
};
