describe('Tests', function() {
  var item,
    view,
    tabsView,
    productView;
  beforeEach(function() {
    item = new Item();
    view = new PopupView({
      model: item,
    });
    productView = new ProductView({
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
  it('Shows correct name', function() {
    view.productView.template = _.template(
      '<div class="product__name"><%= model.name %></div>');
    item.set('name', 'Лента для декора и подарков' +
      ' атласная, янтарный, 2.5 см х 35 м');
    item.trigger('sync');
    var getName = $('.product__name').text();
    expect(item.get('name')).toEqual(getName);
  });
  it('Shows correct property', function() {
    view.productView.template = _.template(
      '<span class="item-price"><%= model.price %></span>');
    item.set('price', '152.9');
    item.trigger('sync');
    var getName = $('.item-price').text();
    expect(item.get('price')).toEqual(getName);
  });
  it('Shows correct img', function() {
    view.productView.template = _.template(
      '<img class="product__img" src="<%= model.photos[0].url_part %>700.jpg" alt="">');
    item.set('photos', 'https://cdn.sky.sima-land.ru/items/991425/0/700.jpg');
    item.trigger('sync');
    var getName = $('product__img').attr('src');
    expect(item.get('img')).toEqual(getName);
  });
  it('Creates collection', function() {
    expect(CommentaryCollection).toBeDefined();
  });
  it('Render comments', function() {
    tabsView = new TabsView({
      model: item
    });
    view.tabsView.$('.content_link:last').click();
  });
  it('Checking on right comment', function() {
    commentaryCollection = new CommentaryCollection();
    commentaryCollection.models['0'].template = _.template(
      '<div class="posted__review_comment"><%= model.message %></div>');
    commentaryCollection.models['0'].set('message', 'Машинка не понравилась, убирает катышки плохо, чтоб достичь хоть более менее "хорошего" результата нужно очень долго и упорно водить на одном месте(')
    commentaryCollection.models['0'].$('.content_link:first').click();
    var getText = $('.posted__review_comment').text();
    expect(commentaryCollection.models['0'].get('message').toBeEqual(getText))
  });
});
