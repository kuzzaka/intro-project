var PopupView = Backbone.View.extend({
  el: $('.add-item__view'),
  events: {
    'click .add-item': 'openPopup',
    'click .modal__close': 'closePopup',
    'click .js_submit_btn': 'sendPopupAttrs',
    'click ': 'closePopupByNonWindowClick',
  },
  initialize() {
      this.template = $('.add-item__view').html();

      this.width = '100%';
      this.height = '100%';

      $(this.el).css({
        'width': this.width,
        'height': this.height,
      });
    },
  openPopup() {
    var popup = $('.window');

    if (popup.hasClass('hidden')) {
      popup.removeClass('hidden');
    }
  },
  closePopupByNonWindowClick() {
    var popup = $('.window');
    var firstClick = true;
    $(document).bind('click.myEvent', function(e) {
      if (!firstClick && $(e.target).closest('.window').length === 0) {
        popup.addClass('hidden');
        $(document).unbind('click.myEvent');
      }
      firstClick = false;
    });
  },
  closePopup() {
    $('.window').addClass('hidden');
    $(document).unbind('click.myEvent');
  },
  sendPopupAttrs() {
    var id = $('.js_attrs').val();
    item.set('id', id);
    item.fetch();
    $('.window').addClass('hidden');
    $(document).unbind('click.myEvent');
  },
});
