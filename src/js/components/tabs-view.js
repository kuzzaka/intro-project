var TabsView = Backbone.View.extend({
  events: {},
  el: $('.content_link'),
  tag: $('a'),
  id: $('#tabs'),
  initialize: function() {
    this.listenTo(productView.model, 'sync', this.changeTab);
  },
  changeTab: function() {
    var self = this;
    this.$('.content_link').on('click', function() {
      self.$('.content_link').removeClass('current');
      self.$(this).addClass('current');

      self.$('.tabs_content>div').hide();
      var tContent = $(this).attr('href');
      self.$(tContent).show();

      return false;
    });
    self.$('.content_link:first').trigger('click');
  },
});
