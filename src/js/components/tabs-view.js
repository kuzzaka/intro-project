var TabsView = Backbone.View.extend({
  events: {
    'click .content_link': 'changeTab',
  },
  initialize: function() {
    this.listenTo(productView.model, 'sync', this.setTab);
  },
  setTab: function() {
    this.$('.content_link:first').trigger('click');
  },
  changeTab: function(e) {
      this.$('.content_link').removeClass('current');
      this.$(e.currentTarget).addClass('current');

      this.$('.tabs_content>div').hide();
      var tContent = $(e.currentTarget).attr('href');
      this.$(tContent).show();
  },
});
