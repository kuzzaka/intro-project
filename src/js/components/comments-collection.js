var CommentaryCollection = Backbone.Collection.extend({
  events: {},
  initialize: function() {
    this.listenTo(productView.model, 'sync', this.getComments);
  },
  url: function() {
    return 'https://www.sima-land.ru/api/v3/item-comment/?item_id=' + item.get('id');
  },
  getComments: function() {
    this.fetch();
  },
  parse: function(resp) {
    return resp.items;
  },
});
