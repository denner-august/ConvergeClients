import styles from "./Clientes.module.scss";

interface clientesEncontradosProps {
  clientes: {
    id: number;
    ClientNome: string;
    titulo: string;
    descrição: string;
    modeloDeNegocio: string;
    valorAtualDoContrato: string;
    dataInicio: string;
  }[];
}

interface ClientesInfoProps {
  id: number;

  titulo: string;
  ClientNome: string;
  descrição: string;
  dataInicio: string;
  modeloDeNegocio: string;
  valorAtualDoContrato: string;
}

export function ClientesInfo(clientesEncontrados: clientesEncontradosProps) {
  const clientes = clientesEncontrados.clientes || [];

  //  <h4>nome: {cliente.ClientNome}</h4>  preciso adicionar o nome do cliente amanhã

  return (
    <div>
      {clientes.length > 0 ? (
        clientes
          .map((cliente: ClientesInfoProps) => (
            <div key={cliente.id} className={styles.Cliente}>
              <div className={styles.Contrato}>
                <h3> {cliente.titulo}</h3>

                <p>
                  Valor do Contrato:{" "}
                  {Number(cliente.valorAtualDoContrato).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </p>
              </div>

              <div className={styles.Contrato}>
                <p>{cliente.descrição}</p>
                <p>
                  Data de Início:
                  {cliente.dataInicio
                    ? new Date(cliente.dataInicio).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                    : "Data não informada"}
                </p>
              </div>

              <div className={styles.Contrato}>
                <p>Modelo de negocio: {cliente.modeloDeNegocio}</p>
              </div>
            </div>
          ))
          .reverse()
      ) : (
        <p>Nenhum cliente foi encontrado</p>
      )}
    </div>
  );
}
