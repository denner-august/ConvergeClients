describe("template spec", () => {
  const url = "http://localhost:3000/";

  it("verificando url", () => {
    cy.visit(`${url}`);
  });

  it("verificando quantidade de registros", () => {
    cy.fixture("mockeUser").then((users) => {
      cy.intercept("GET", "**/api/users/getUsers", { body: users }).as(
        "getUsers"
      );
      cy.visit(`${url}`);
      cy.get(".Clientes-module-scss-module__pplCZG__ClientesInfo");
      cy.get("tbody tr").should("have.length", 1);
    });
  });

  it("verificando a função de pesquisar 1 cliente", () => {
    cy.fixture("mockeUser").then((users) => {
      cy.intercept("GET", "**/api/users/getUsers", { body: users }).as(
        "getUsers"
      );

      cy.visit(url);
      cy.wait("@getUsers");

      cy.get("input").type("Denner");
      cy.get(".Clientes-module-scss-module__pplCZG__ClientesInfo");
      cy.get("tbody tr").should("have.length", 1);
      cy.get("tbody > tr > :nth-child(1)").contains("Denner");
    });
  });

  it("verificando a função de pesquisar sem cliente compativel", () => {
    cy.fixture("mockeUser").then((users) => {
      cy.intercept("GET", "**/api/users/getUsers", { body: users }).as(
        "getUsers"
      );

      cy.visit(`${url}`);
      cy.get("input").type("zyz");
      cy.get(".Clientes-module-scss-module__pplCZG__ClientesInfo");
      cy.get("tbody tr").should("have.length", 0);
    });
  });

  it("criação de usuario", () => {
    cy.fixture("mockeUser").then((users) => {
      cy.intercept("POST", "**/api/users/createUsers", { body: users }).as(
        "mockCreateUser"
      );

      cy.intercept("GET", "**/api/users/getUsers", { body: users }).as(
        "getUsers"
      );

      cy.visit(url);
      cy.get(".inline-flex").click();
      cy.get(":nth-child(4) > .border-input").click();
      cy.get('[aria-labelledby="radix-«rb»"]').click();
      cy.get(".bg-primary").click();

      cy.reload();

      cy.get(".Clientes-module-scss-module__pplCZG__ClientesInfo");
      cy.get("tbody tr").should("have.length", 1);
      cy.get("tbody > tr > :nth-child(1)").contains("Denner");
    });
  });
});
