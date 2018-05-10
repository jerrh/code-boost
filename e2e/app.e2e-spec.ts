import { CodebuzzPage } from './app.po';

describe('codebuzz App', () => {
  let page: CodebuzzPage;

  beforeEach(() => {
    page = new CodebuzzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
