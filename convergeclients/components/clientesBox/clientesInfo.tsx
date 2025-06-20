"use client";

import { useEffect, useState } from "react";
import styles from "./Clientes.module.scss";
import tableStyles from "./tableClients.module.scss";
import { UserRoundX } from "lucide-react";
import { removeClients } from "@/conection/removeClient";

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const TableClientes = () => {
    // quero remover alguns itens se o width da tela for menor que 768px

    return (
      <table className={tableStyles.Container}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Modelo de Negócio</th>
            <th>Valor do Contrato</th>
            <th>Data de Início</th>
            <th>deletar</th>
          </tr>
        </thead>
        <tbody className={tableStyles.tableBody}>
          {clientes.map((cliente: ClientesInfoProps) => (
            <tr key={cliente.id}>
              <td>{cliente.ClientNome}</td>
              <td>{cliente.titulo}</td>
              <td>{cliente.descrição}</td>
              <td>{cliente.modeloDeNegocio}</td>
              <td>
                {Number(cliente.valorAtualDoContrato).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {cliente.dataInicio
                  ? new Date(cliente.dataInicio).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                  : "Data não informada"}
              </td>
              <td>
                <button
                  className={styles.deleteButton}
                  onClick={() => {
                    removeClients(cliente.id);
                  }}
                >
                  <UserRoundX />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  const TableClientesMobile = () => {
    // quero remover alguns itens se o width da tela for menor que 768px

    return (
      <table className={tableStyles.Container}>
        <thead>
          <tr>
            <th>Nome</th>

            <th>Modelo de Negócio</th>
            <th>Valor do Contrato</th>

            <th>deletar</th>
          </tr>
        </thead>
        <tbody className={tableStyles.tableBody}>
          {clientes.map((cliente: ClientesInfoProps) => (
            <tr key={cliente.id}>
              <td>{cliente.ClientNome}</td>

              <td>{cliente.modeloDeNegocio}</td>
              <td>
                {Number(cliente.valorAtualDoContrato).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>

              <td>
                <button
                  className={styles.deleteButton}
                  onClick={() => {
                    removeClients(cliente.id);
                  }}
                >
                  <UserRoundX />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return <>{isMobile ? <TableClientesMobile /> : <TableClientes />}</>;
}
