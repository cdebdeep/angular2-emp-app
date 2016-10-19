import { Angular2EmpAppPage } from './app.po';

describe('angular2-emp-app App', function() {
  let page: Angular2EmpAppPage;

  beforeEach(() => {
    page = new Angular2EmpAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
