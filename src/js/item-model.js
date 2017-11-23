var Item = Backbone.Model.extend({url: function() {
  return 'https://www.sima-land.ru/api/v3/item/' + this.get('id') + '/';
}});
