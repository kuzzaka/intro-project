var PopupView = Backbone.View.extend({
  el: $('.add-item__view'),
  events: {
    'click .add-item': 'openPopup',
    'click .modal__close': 'closePopup',
    'click .js_submit_btn': 'sendPopupAttrs',
  },
  initialize: function() {
      this.template = $('.add-item__view').html();

      this.width = '100%';
      this.height = '100%';

      $(this.el).css({
        'width': this.width,
        'height': this.height,
      });
    },
  openPopup: function() {
    var popup = $('.window');

    if (popup.hasClass('hidden')) {
      popup.removeClass('hidden');

      var firstClick = true;
      $(document).bind('click.myEvent', function(e) {
        if (!firstClick && $(e.target).closest('.window').length === 0) {
          popup.addClass('hidden');
          $(document).unbind('click.myEvent');
        }
        firstClick = false;
      });
    }
  },
  closePopup: function() {
    $('.window').addClass('hidden');
    $(document).unbind('click.myEvent');
  },
  sendPopupAttrs: function() {
    var id = $('.js_attrs').val();
    item.set('id', id);
    item.fetch();
    console.log(item);
    console.log(id);
    $('.window').addClass('hidden');
    $(document).unbind('click.myEvent');
  },
});
