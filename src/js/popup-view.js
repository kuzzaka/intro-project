var PopupView = Backbone.View.extend({
  el: $('.add-item__view'),
  events: {
    'click .add-item': 'openPopup',
    'click .modal__close': 'closePopup',
    'click .js_submit_btn': 'sendPopupAttrs',
    'click ': 'closePopupByNonWindowClick',
  },
  openPopup: function() {
    if (popup.hasClass('hidden')) {
      popup.removeClass('hidden');
    }
  },
  closePopupByNonWindowClick: function() {
    var firstClick = true;
    $(document).bind('click.myEvent', function(e) {
      if (!firstClick && $(e.target).closest('.window').length === 0) {
        closePopup();
      }
      firstClick = false;
    });
  },
  closePopup: function() {
    closePopup();
  },
  sendPopupAttrs: function() {
    var id = $('.js_attrs').val();
    this.model.set('id', id);
    item.fetch();
    closePopup();
  },
});
