"use client";
import { useEffect, useState } from "react";
import styles from "./Clientes.module.scss";
import { ClientesInfo } from "./clientesInfo";

interface ClientesProps {
  id: number;
  ClientNome: string;
  titulo: string;
  descrição: string;
  modeloDeNegocio: string;
  valorAtualDoContrato: string;
  dataInicio: string;
}

export function ClientesBox({ AllClients }: { AllClients: ClientesProps[] }) {
  const [searchClientes, setSearchClientes] = useState("");
  const [clientAtual, setClientAtual] = useState(
    (AllClients as ClientesProps[]) || []
  );

  useEffect(() => {
    if (!searchClientes) {
      setClientAtual(AllClients);
    } else {
      setClientAtual(
        AllClients.filter((cliente) =>
          cliente.ClientNome.toLowerCase().includes(
            searchClientes.toLowerCase()
          )
        )
      );
    }
  }, [searchClientes, AllClients]);

  return (
    <div className={styles.Container}>
      <input
        type="text"
        placeholder="Pesquisar pelo nome do cliente"
        onChange={(e) => setSearchClientes(e.target.value)}
      />
      <p>Clientes cadastrados</p>
      <div className={styles.ClientesInfo}>
        <ClientesInfo clientes={clientAtual} />
      </div>
    </div>
  );
}
