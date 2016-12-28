import { AngularMarkupExamplePage } from './app.po';

describe('angular-markup-example App', function() {
  let page: AngularMarkupExamplePage;

  beforeEach(() => {
    page = new AngularMarkupExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
