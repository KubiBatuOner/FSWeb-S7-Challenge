describe("Home Test", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Ana sayfadaki butona tıklayınca form sayfasına gidiyor mu?", function() {
    cy.get("[data-cy = home-button]").click();
  });
});
describe("Form Error Tests", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("İsim kısmına 1 karakter yazınca hata mesajı görünüyor mu?", function() {
    cy.get("[data-cy = labelİsim]").click();
    cy.get("[data-cy = inputİsim]").type("b");
    cy.get("[data-cy = errorİsim]").should("exist");
  });
  it("Adres kısmına 3 karakter yazınca hata mesajı görünüyor mu?", function() {
    cy.get("[data-cy = labelAdres]").click();
    cy.get("[data-cy = inputAdres]").type("Bur");
    cy.get("[data-cy = errorAdres]").should("exist");
  });
  it("Pizza boyutu seçilmeyince hata mesajı görünüyor mu?", function() {
    cy.get("[data-cy = boyutSeçin]").select("Orta");
    cy.get("[data-cy = boyutSeçin]").select("");
    cy.get("[data-cy = errorBoyut]").should("exist");
  });
  it("Pizza çeşidi seçilmeyince hata mesajı görünüyor mu?", function() {
    cy.get("[data-cy = inputPizza]").select("Margarita Pizza");
    cy.get("[data-cy = inputPizza]").select("");
    cy.get("[data-cy = errorPizza]").should("exist");
  });
  it("Sipariş sayısı 0 olunca hata mesajı görünüyor mu?", function() {
    cy.get("[data-cy = inputSiparisSayisi]").type("0");
    cy.get("[data-cy = errorSiparisSayisi]").should("exist");
  });
});
describe("form ekstra malzemeler testi", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("Ekstra malzemeler kısmında tüm malzemeler seçilebiliyor mu ?", function() {
    cy.get('[type = "checkbox"]').check();
  });
  it("Ekstra malzemeler kısmında 1 veya daha fazla seçilebiliyor mu ?", function() {
    cy.get('[type = "checkbox"]').check(["Sucuk", "Biber", "Zeytin"]);
  });
});
describe("Form Tests", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("Formu doldurup gönderince sipariş yazısı çıkıyor mu?", function() {
    cy.get("[data-cy = inputİsim]").type("Kubilay");
    cy.get("[data-cy = inputAdres]").type("Bursa");
    cy.get("[data-cy = boyutSeçin]").select("Küçük");
    cy.get("[data-cy = inputPizza]").select("4 Peynirli Pizza");
    cy.get('[type = "checkbox"]').check(["Zeytin", "Biber"]);
    cy.get("[data-cy = inputSiparisSayisi]").type("2");
    /* cy.get("[data-cy = inputTelefon]").type("5432123456"); */
    cy.get("[data-cy = buttonOrder]").click();
    cy.get("[data-cy = submitFormu]").submit();
    cy.get("[data-cy = yeniSipariş]").should("exist");
  });
});
