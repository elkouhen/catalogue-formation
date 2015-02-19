describe('L\'application ', function () {

  beforeEach(function () {
    browser.get('http://localhost/formations-app/index.html');
  });

  it('doit avoir un titre', function () {

    expect(browser.getTitle()).toEqual('Catalogue de Formations SOFTEAM');
  });
});