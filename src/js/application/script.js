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
  el: $('.product'),
});

var commentary = new Commentary();
var commentaryCollection = new CommentaryCollection({
  model: item,
  productView: ProductView,
});
var commentaryList = new CommentaryList({
  model: Commentary,
  el: $('.product__comment'),
});
