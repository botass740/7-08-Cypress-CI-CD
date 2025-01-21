const log = require("../../fixtures/login.json");
const selector = require("../../fixtures/selector");
const url = require("../../fixtures/client.json");
const adminAuthButtonSelector = selector.adminAuthButtonSelector;

describe("Тест аутентификации", () => {
    beforeEach(() => {
      cy.visit(url.adminUrl);
    });

    it("Логин незарегистрированного администратора", () => {
      cy.get(selector.emailField).type(log.invalidEmail);
      cy.get(selector.passField).type(log.invalidPass);
      cy.get(selector.loginButton).click();
      cy.contains("Ошибка авторизации!").should("be.visible");
    });
  });