import { GirlrobberPage } from './app.po';

describe('girlrobber App', function() {
  let page: GirlrobberPage;

  beforeEach(() => {
    page = new GirlrobberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
