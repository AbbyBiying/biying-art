import { BiyingArtPage } from './app.po';

describe('biying-art App', () => {
  let page: BiyingArtPage;

  beforeEach(() => {
    page = new BiyingArtPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
