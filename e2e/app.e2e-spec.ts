import { Tusharbalar.Github.IoPage } from './app.po';

describe('tusharbalar.github.io App', () => {
  let page: Tusharbalar.Github.IoPage;

  beforeEach(() => {
    page = new Tusharbalar.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
