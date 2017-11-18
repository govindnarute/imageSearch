import { ImageSerachPage } from './app.po';

describe('image-serach App', () => {
  let page: ImageSerachPage;

  beforeEach(() => {
    page = new ImageSerachPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
