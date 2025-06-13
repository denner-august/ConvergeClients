export function apiCreateClient(users: FormData, data: Date) {
  const titulo = users.get("titulo");
  const name = users.get("NomeCliente");
  const descrição = users.get("descrição");
  const modeloNegocio = users.get("ModeloNegocioCliente");
  const valorContrato = users.get("valorContrato");

  const dataInicio = data ? data.toLocaleDateString() : ""; // Formata a data

  fetch("http://localhost:3000/api/users/createUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo,
      name,
      descrição,
      modeloNegocio,
      valorContrato,
      dataInicio,
    }),
  });
}
