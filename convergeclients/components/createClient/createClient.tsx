"use client";

import styles from "./createClient.module.scss";
import "react-day-picker/dist/style.css";

import { Button } from "@/components/ui/button";

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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";
import { useState } from "react";

import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { DayPicker } from "react-day-picker";
import { apiCreateClient } from "../../conection/apiCreatClient";

const schema = z.object({
  nome: z
    .string({ error: "O nome é obrigatório" })
    .min(1, "O nome é obrigatório"),
  descrição: z
    .string({ error: "A descrição é obrigatória" })
    .min(1, "A descrição é obrigatória"),
  titulo: z
    .string({ error: "O nome do negocio é obrigatório" })
    .min(1, "O nome do negocio é obrigatório"),
  modeloDeNegocio: z
    .string({ error: "O modelo de negocio é obrigatório" })
    .min(1, "O modelo de negocio é obrigatório"),

  valorDoContrato: z
    .number({ error: "O valor do contrato deve ser positivo" })
    .positive({ error: "O valor do contrato deve ser positivo" }),
  inicioDoContrato: z.date().optional(),

  plataforma: z.array(z.string()).min(1, "Selecione pelo menos uma plataforma"),
});

export function FormCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "Nome do cliente",
      descrição: "Descrição sobre o cliente",
      titulo: "Titulo do negocio",

      valorDoContrato: 1000,
      plataforma: ["meta ads"],
    },
  });
  const [selected, setSelected] = useState<Date>(new Date());

  function onSubmit(values: z.infer<typeof schema>) {
    apiCreateClient(values, selected);
  }

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
            Preencha todos os campos para adicionar um novo cliente.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="NomeCliente">Nome do cliente</Label>
              <p>{errors.nome?.message}</p>
              <Input
                {...register("nome")}
                id="nome"
                placeholder="Digite o nome do cliente"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="DescriçãoCliente">Descrição</Label>
              <p>{errors.descrição?.message}</p>
              <Input
                id="descrição"
                placeholder="Escreva uma breve descrição"
                {...register("descrição")}
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="titulo">Nome do negocio</Label>

              <p>{errors.titulo?.message}</p>
              <Input
                id="titulo"
                placeholder="Nome do negocio do negocio"
                {...register("titulo")}
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="ModeloNegocioCliente">
                Modelo de negocio do cliente
              </Label>

              <p>{errors.modeloDeNegocio?.message}</p>

              <Select
                onValueChange={(value) => {
                  setValue("modeloDeNegocio", value);
                }}
              >
                <SelectTrigger className="w-[100%]">
                  <SelectValue placeholder="Selecione o modelo de negócio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Modelos de negócio</SelectLabel>
                    <SelectItem value="Negocio local">Negocio local</SelectItem>
                    <SelectItem value="E-commerce">E-commerce</SelectItem>
                    <SelectItem value="Lançamento">Lançamento</SelectItem>
                    <SelectItem value="perpetuo">perpetuo</SelectItem>
                    <SelectItem value="assinatura">assinatura</SelectItem>
                    <SelectItem value="markeplace">markeplace</SelectItem>
                    <SelectItem value="b2b">b2b</SelectItem>
                    <SelectItem value="b2c">b2c</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className={styles.plataforma}>
              <p>qual plataforma seu cliente usa?</p>

              <p>{errors.plataforma?.message}</p>

              <div>
                <Label htmlFor="meta">Meta ads</Label>
                <input
                  {...register("plataforma")}
                  type="checkbox"
                  value="meta ads"
                  id="meta"
                />
              </div>

              <div>
                <Label htmlFor="google">Google ads</Label>
                <input
                  {...register("plataforma")}
                  type="checkbox"
                  value="google ads"
                  id="google"
                />
              </div>

              <div>
                <Label htmlFor="linkedin">Linkedin</Label>
                <input
                  {...register("plataforma")}
                  type="checkbox"
                  value="linkedin"
                  id="linkedin"
                />
              </div>

              <div>
                <Label htmlFor="pinterest">pinterest</Label>
                <input
                  {...register("plataforma")}
                  type="checkbox"
                  value="pinterest"
                  id="pinterest"
                />
              </div>

              <div>
                <Label htmlFor="taboola">Taboola</Label>
                <input
                  {...register("plataforma")}
                  type="checkbox"
                  value="taboola"
                  id="taboola"
                />
              </div>

              <div>
                <Label htmlFor="tiktok">Tiktok</Label>
                <input
                  {...register("plataforma")}
                  type="checkbox"
                  value="tiktok"
                  id="tiktok"
                />
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="contratoCliente">
                Valor do contrato do cliente
              </Label>

              <p>{errors.valorDoContrato?.message}</p>
              <Input
                id="valorContrato"
                type="number"
                placeholder="digite o valor por extenso: ex: 10000 "
                {...register("valorDoContrato", {
                  valueAsNumber: true,
                })}
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="DataInicioCliente">
                Data de inicio do contrato
              </Label>

              <DayPicker
                {...register("inicioDoContrato")}
                id="DataInicioCliente"
                required
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={
                  selected
                    ? `Começou no dia: ${selected.toLocaleDateString()}`
                    : "Selecione a data de inicio do contrato (se ela não existir, a data será o dia atual)"
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
