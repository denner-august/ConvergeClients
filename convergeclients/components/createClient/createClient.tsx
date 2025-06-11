"use client";
import styles from "./createClient.module.scss";
import { Button } from "@/components/ui/button";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";
import { useState } from "react";

export function DialogDemo() {
  const [selected, setSelected] = useState<Date>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-black text-white">
          novo cliente <UserPlus />
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`sm:max-w-[425px] max-h-[500px] overflow-auto ${styles.Container}`}
      >
        <DialogHeader>
          <DialogTitle>Adicionar um novo cliente</DialogTitle>
          <DialogDescription>
            Preencha todas as abaixo para adicionar um novo cliente.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Evita o recarregamento da página
            const formData = new FormData(e.currentTarget);
            const name = formData.get("NomeCliente");
            const descrição = formData.get("descrição");
            const modeloNegocio = formData.get("ModeloNegocioCliente");
            const valorContrato = formData.get("valorContrato");
            const dataInicio = selected ? selected.toLocaleDateString() : ""; // Formata a data

            console.log("Nome:", name);
            console.log("Descrição:", descrição);
            console.log("Modelo de Negócio:", modeloNegocio);
            console.log("Valor do Contrato:", valorContrato);
            console.log("Data de Início:", dataInicio);

            // Faça algo com os dados, como enviar para uma API
          }}
        >
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="NomeCliente">Nome</Label>
              <Input id="name-1" name="NomeCliente" defaultValue="Denner" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="DescriçãoCliente">Descrição</Label>
              <Input
                id="descrição"
                name="descrição"
                defaultValue="Cliente que tem 5 supermecados "
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="ModeloNegocioCliente">
                Modelo de negocio do cliente
              </Label>
              <Input
                id="ModeloNegocioCliente"
                name="ModeloNegocioCliente"
                defaultValue="e-commerce"
              />
            </div>
            <div className="grid gap-3">
              {/* adicionar component de monetário */}
              <Label htmlFor="contratoCliente">
                Valor do contrato do cliente
              </Label>
              <Input
                required
                id="valorContrato"
                name="valorContrato"
                defaultValue="R$ 1.000"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="DataInicioCliente">
                Data de inicio do contrato
              </Label>
              <DayPicker
                required
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={
                  selected
                    ? `Começou no dia: ${selected.toLocaleDateString()}`
                    : "Selecione a data inicio do contrato"
                }
              />
            </div>
          </div>
          <DialogFooter className={styles.Footer}>
            <DialogClose asChild>
              <Button variant="outline" className={styles.create}>
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className={styles.create}>
              Adicionar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
