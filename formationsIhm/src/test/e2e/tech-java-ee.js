/*global describe, beforeEach, browser, it, element, by, expect*/

describe('La vue tech-java-ee', function () {

  'use strict';

  beforeEach(function () {
    browser.get('http://localhost/formations-app/index.html#/formations/tech-java-ee');
  });

  it('affiche 3 formations', function () {

    var formationsElement = element.all(by.repeater('formation in formations'));

    expect(formationsElement.count()).toEqual(3);
  });

  it('affiche la formation java', function () {

    var formationElement = element(by.binding('formation.titre'));

    expect(formationElement.getText()).toEqual('Programmation orientée objet en Java');
  });

  it('permet de changer le statut d\'une formation', function () {

    var formationSpan = element.all(by.repeater('formation in formations')).first().element(by.css('.glyphicon'));

    var statusBefore;

    formationSpan.getAttribute('class').then(function (data) {
      statusBefore = data;
      formationSpan.click();
      return formationSpan.getAttribute('class');
    }).then(function (statusAfter) {
      expect(statusAfter).not.toEqual(statusBefore);
    });

  });
});
