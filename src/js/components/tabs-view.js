var TabsView = Backbone.View.extend({
  events: {
    'click .content_link': 'changeTab',
  },
  initialize: function() {
    console.log('hello');
    this.tab = this.$('.content_link');
    $('#tabs>.product__menu__list>.content_li>this.tab:first').trigger('click');
  },
  changeTab: function() {
    $('#tabs>.product__menu__list>.content_li>this.tab').removeClass('current');
    $(this.tab).addClass('current');

    $('.tabs_content>div').hide();
    tContent = $(this).attr('href');
    $(tContent).show();

    return false;
  },
});
