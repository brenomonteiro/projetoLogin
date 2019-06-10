import { SistemaEcommercePage } from './app.po';

describe('sistema-ecommerce App', function() {
  let page: SistemaEcommercePage;

  beforeEach(() => {
    page = new SistemaEcommercePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
