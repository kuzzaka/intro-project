var CommentaryCollection = Backbone.Collection.extend({
  events: {},
  model: Commentary,
  url: 'https://www.sima-land.ru/api/v3/item-comment/?item_id=1025229',
  initialize: function() {
    this.listenTo(productView.model, 'sync', this.getComments);
  },
  getComments: function() {
    this.fetch();
  },
  parse: function(resp) {
    return resp.items;
  },
});
