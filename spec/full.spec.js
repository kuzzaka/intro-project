describe('Tests', function() {
  var item,
      view;
  beforeEach(function() {
    item = new Item();
    view = new PopupView({
        model: item,
      });
  });
  it('Existence of model', function() {
    expect(item.url()).toBeDefined();
    var id = 1234;
    item.set('id', id);
    expect(item.url()).toEqual('https://www.sima-land.ru/api/v3/item/1234/');
  });
  it('Existing methods of View', function() {
    var view = new PopupView({
      model: item,
    });
    expect(view.openPopup).toBeDefined();
    expect(view.closePopup).toBeDefined();
    expect(view.getItemById).toBeDefined();
    });
  it('Open Popup', function() {
    view.$('.add-item').click();
    expect(view.popup).not.toHaveClass('hidden');
  });
  it('Close Popup', function() {
    view.$('.modal__close').click();
    expect(view.popup).toHaveClass('hidden');
  });
  it('getItemById check', function() {
    var id = view.$('.js_attrs').val(12345);
    var submitBtn = view.$('.js_submit_btn');
    spyOn(PopupView.prototype, 'getItemById');
    view = new PopupView({
      model: item,
    });
    submitBtn.click();
    expect(view.getItemById).toHaveBeenCalled();
  });
  it('Creates product view', function() {
    expect(view.productView).toBeDefined();
  });
  it('Renders on model sync', function() {
    spyOn(ProductView.prototype, 'render');
    view = new PopupView({
      model: item,
    });
    item.trigger('sync');
    expect(view.productView.render).toHaveBeenCalled();
  });
  it('shows correct name', function() {
    view.productView.template = _.template(
    '<div class="product__name"><%= model.name %></div>');
    item.set('name', 'Лента для декора и подарков' +
    ' атласная, янтарный, 2.5 см х 35 м');
    item.trigger('sync');
    var getName = $('.product__name').text();
    expect(item.get('name')).toEqual(getName);
  });
  it('shows correct property', function() {
    view.productView.template = _.template(
    '<span class="item-price"><%= model.price %></span>');
    item.set('price', '152.9');
    item.trigger('sync');
    var getName = $('.item-price').text();
    expect(item.get('price')).toEqual(getName);
  });
  it('shows correct img', function() {
    view.productView.template = _.template(
    '<img class="product__img" src="<%= model.photos[0].url_part %>700.jpg" alt="">');
    item.set('photos', 'https://cdn.sky.sima-land.ru/items/991425/0/700.jpg');
    item.trigger('sync');
    var getName = $('product__img').attr('src');
    expect(item.get('img')).toEqual(getName);
  });
});
