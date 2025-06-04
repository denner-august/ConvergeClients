import styles from "./Clientes.module.scss";
export function ClientesInfo() {
  const clientes = [
    {
      id: 1,
      titulo: "Comércio Online Brasil",
      descricao: "Loja virtual de produtos variados",
      DataInicio: "01/01/2025",
      tipo: "E-commerce",
      valorDoContrato: "R$ 1.000,00",
      status: "ativo",
    },
    {
      id: 2,
      titulo: "Cliente 2",
      descricao: "Descrição do cliente 2",
      DataInicio: "02/01/2025",
      tipo: "infoproduto",
      valorDoContrato: "R$ 2.000,00",
      status: "ativo",
    },
    {
      id: 3,
      titulo: "Cliente 2",
      descricao: "Descrição do cliente 2",
      DataInicio: "02/01/2025",
      tipo: "infoproduto",
      valorDoContrato: "R$ 2.000,00",
      status: "ativo",
    },
    {
      id: 4,
      titulo: "Cliente 2",
      descricao: "Descrição do cliente 2",
      DataInicio: "02/01/2025",
      tipo: "infoproduto",
      valorDoContrato: "R$ 2.000,00",
      status: "ativo",
    },
  ];

  return (
    <div>
      {clientes.map((cliente) => (
        <div key={cliente.id} className={styles.Cliente}>
          <div className={styles.Contrato}>
            <h3>{cliente.titulo}</h3>
            <p>Valor do Contrato: {cliente.valorDoContrato}</p>
          </div>

          <div className={styles.Contrato}>
            <p>{cliente.descricao}</p>
            <p>Data de Início: {cliente.DataInicio}</p>
          </div>

          <div className={styles.Contrato}>
            <p>Tipo: {cliente.tipo}</p>

            <p>Status: {cliente.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
