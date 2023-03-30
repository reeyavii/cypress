//<reference types="cypress" />;

context("Text Box", () => {
  it("Test case", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.get("input[type=text]").type("Username");
    cy.get("#userEmail").type("username@gmail.com");
    cy.get("#currentAddress").type("Iloilo City");
    cy.get("#permanentAddress").type("Alimodian,Iloilo");
    cy.get("#submit").click();
  });
});
