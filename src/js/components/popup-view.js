
var PopupView = Backbone.View.extend({
  el: $('.add-item__view'),
  events: {
    'click .add-item': 'openPopup',
    'click .modal__close': 'closePopup',
    'click .js_submit_btn': 'getItemById',
  },
  initialize: function() {
    this.popup = this.$('.window');
    this.productView = new ProductView({
      model: this.model,
      el: $('.product')
    });
  },
  openPopup: function(e) {
    e.stopPropagation();
    if (this.popup.hasClass('hidden')) {
      this.popup.removeClass('hidden');
    }

    var self = this;
    $(document).on('click', function(e) {
      if ($(e.target).closest('.window').length === 0) {
        self.closePopup();
      }
    });
  },
  closePopup: function() {
    this.$('.window').addClass('hidden');
    $(document).off('click');
  },
  getItemById: function() {
    var id = this.$('.js_attrs').val();
    this.model.set('id', id);
    this.model.fetch();
    this.closePopup();
  },
});
