import { notificationAltert } from "@/alert/Alert";

type apiProps = {
  titulo: string;
  nome: string;
  descrição: string;
  modeloDeNegocio: string;
  valorDoContrato: number;
};

export async function apiCreateClient(users: apiProps, data: Date) {
  const titulo = users.titulo;
  const name = users.nome;
  const descrição = users.descrição;
  const modeloNegocio = users.modeloDeNegocio;
  const valorDoContrato = users.valorDoContrato;

  const dataInicio = data ? data.toLocaleDateString() : ""; // Formata a data

  const response = await fetch("http://localhost:3000/api/users/createUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo,
      name,
      descrição,
      modeloNegocio,
      valorDoContrato,
      dataInicio,
    }),
  });

  switch (response.status) {
    case 201:
      notificationAltert("success", "usuario criado com sucesso!");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      break;

    case 400:
      notificationAltert("warning", "Erro ao preencher o formulario");
      break;

    case 500:
      notificationAltert("error", "Erro ao criar novo usuario");
      break;
  }
}
