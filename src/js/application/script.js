var item = new Item();
var view = new PopupView({
  model: item,
  el: $('.add-item__view'),
});

var productView = new ProductView({
  model: item,
  el: $('.product'),
});
var tabsView = new TabsView({
  model: item,
  el: $('.product__menu'),
});
