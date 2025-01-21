const url = require("../../fixtures/client.json");
const selector = require("../../fixtures/selector");

describe("Отображение главной страницы", () => {
  beforeEach(() => {
    cy.visit(url.clientUrl);
  });
  
  it("Показывает наименование страницы", () => {
    cy.get(selector.title).should("contain", "Идёмвкино");
  });

});