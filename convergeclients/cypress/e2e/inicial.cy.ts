describe("template spec", () => {
  const url = "http://localhost:3000/";

  it("verificando url", () => {
    cy.visit(`${url}`);
  });

  it("verificando quantidade de registros", () => {
    cy.visit(`${url}`);
    cy.get(".Clientes-module-scss-module__pplCZG__ClientesInfo");
    cy.get("tbody tr").should("have.length", 2);
  });

  it("verificando a função de pesquisar clientes", () => {
    cy.visit(`${url}`);
    cy.get("input").type("denner");
    cy.get(".Clientes-module-scss-module__pplCZG__ClientesInfo");
    cy.get("tbody tr").should("have.length", 1);
  });

  it("verificando a função de pesquisar clientes", () => {
    cy.visit(`${url}`);
    cy.get("input").type("zyz");
    cy.get(".Clientes-module-scss-module__pplCZG__ClientesInfo");
    cy.get("tbody tr").should("have.length", 0);
  });
});
