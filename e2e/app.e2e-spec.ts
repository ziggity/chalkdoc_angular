import { ChalkdocfridayPage } from './app.po';

describe('chalkdocfriday App', function() {
  let page: ChalkdocfridayPage;

  beforeEach(() => {
    page = new ChalkdocfridayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
