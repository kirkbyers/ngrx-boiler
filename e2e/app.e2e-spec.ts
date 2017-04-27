import { DpShellBrowserPage } from './app.po';

describe('dp-shell-browser App', () => {
  let page: DpShellBrowserPage;

  beforeEach(() => {
    page = new DpShellBrowserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
