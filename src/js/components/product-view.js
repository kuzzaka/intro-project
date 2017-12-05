var ProductView = Backbone.View.extend({
  events: {},
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },
  template: _.template($('#product-template').html()),
  render: function() {
    this.$el.html(this.template({
    model: this.model.toJSON(),
    }));
    (this.model.get('certificate_type_id') === 0) ? this.model.set('certificate_type_id', 'Не подлежит сертификации') : this.model.set('certificate_type_id', 'Сертифицирован');
    (this.model.get('keep_package') === 0) ? this.model.set('keep_package', 'Без коробки') : this.model.set('keep_package', 'С коробкой');
    return this;
  },
});
