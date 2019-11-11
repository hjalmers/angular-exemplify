import { AngularExemplifyPage } from './app.po';

describe('angular-exemplify App', function() {
  let page: AngularExemplifyPage;

  beforeEach(() => {
    page = new AngularExemplifyPage();
  });

  it('should display message saying Angular Exemplify', async () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular Exemplify');
  });
});
