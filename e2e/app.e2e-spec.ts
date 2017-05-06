import { LupineAngularPage } from './app.po';

describe('lupine-angular App', () => {
  let page: LupineAngularPage;

  beforeEach(() => {
    page = new LupineAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
