import { TpAngularFirstPage } from './app.po';

describe('tp-angular-first App', function() {
  let page: TpAngularFirstPage;

  beforeEach(() => {
    page = new TpAngularFirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
