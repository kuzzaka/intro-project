var PopupView = Backbone.View.extend({
  el: $('.add-item__view'),
  events: {
    'click .add-item': 'openPopup',
    'click .modal__close': 'closePopup',
    'click .js_submit_btn': 'sendPopupAttrs',
    'click ': 'closePopupByNonWindowClick',
  },
  initialize: function() {
    this.popup = this.$('.window');
  },
  openPopup: function(e) {
    e.stopPropagation();
    if (this.popup.hasClass('hidden')) {
      this.popup.removeClass('hidden');
    }

    var self = this;
    $(document).on('click', function(e) {
      console.log(e);
      if ($(e.target).closest('.window').length === 0) {
        self.closePopup();
      }
    });
  },
  closePopup: function() {
    $('.window').addClass('hidden');
    $(document).off('click');
  },
  sendPopupAttrs: function() {
    var id = $('.js_attrs').val();
    this.model.set('id', id);
    this.model.fetch();
    this.closePopup();
  },
});
