import { notificationAltert } from "@/alert/Alert";

export async function removeClients(id: number) {
  const response = await fetch("http://localhost:3000/api/users/removeUser", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });

  switch (response.status) {
    case 204:
      notificationAltert("success", "Cliente removido com sucesso");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      break;

    case 400:
      notificationAltert("warning", "Erro ao informar id do cliente");
      break;

    case 404:
      notificationAltert("error", "Erro ao remover cliente");
      break;
  }
}
