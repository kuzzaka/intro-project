var TabsView = Backbone.View.extend({
  events: {
    'click .content_link': 'changeTab',
  },
  initialize: function(options) {
    if (options) {
      _.extend(this, options);
    }
    this.listenTo(this.model, 'sync', this.setTab);
    this.commentaryCollection = new CommentaryCollection();
    this.сommentaryList = new CommentaryList({
      model: this.commentaryCollection,
      el: $('.product__comment'),
    });
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
    if ($(e.currentTarget).hasClass('content_link__comments')) {
      this.renderComments();
    }
  },
  template: _.template($('#review_template').html()),
  renderComments: function() {
    var self = this;
    $.each(this.commentaryCollection.models, function() {
      self.$('.review_template').append(self.template({
        model: this.toJSON(),
      }));
      return this;
    });
  },
});
