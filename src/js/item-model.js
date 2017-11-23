var Item = Backbone.Model.extend({url() {
  return 'https://www.sima-land.ru/api/v3/item/' + this.get('id') + '/';
}});
