"use client";

import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  TableClientes,
  TableClientesMobile,
} from "../tableClientes/tableClientes";

import { ClientesProps, DateClientesProps } from "@/types/types";

export function ClientesInfo(clientesEncontrados: DateClientesProps) {
  const clientes = clientesEncontrados.clientes || [];

  const [isMobile, setIsMobile] = useState(false);
  const [userSelected, setUserSelected] = useState({} as ClientesProps);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Dialog>
        <DialogTrigger style={{ width: "100%" }}>
          {isMobile ? (
            <TableClientesMobile
              clients={clientes}
              selectClient={setUserSelected}
            />
          ) : (
            <TableClientes clients={clientes} selectClient={setUserSelected} />
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Informações do seu cliente</DialogTitle>
          <DialogDescription></DialogDescription>
          <h3>Nome: {userSelected.ClientNome}</h3>
          <p>Título: {userSelected.titulo}</p>
          <p>Descrição: {userSelected.descrição}</p>
          <p>Modelo de Negócio: {userSelected.modeloDeNegocio}</p>
          <span>
            Valor Atual do Contrato:{" "}
            {Number(userSelected.valorAtualDoContrato).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span>
            Data de Início:{" "}
            {userSelected.dataInicio
              ? new Date(userSelected.dataInicio).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
              : "Data não informada"}
          </span>
        </DialogContent>
      </Dialog>
    </>
  );
}
