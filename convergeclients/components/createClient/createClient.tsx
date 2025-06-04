"use client";
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
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-black text-white">
            novo cliente <UserPlus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar um novo cliente</DialogTitle>
            <DialogDescription>
              Preencha todas as abaixo para adicionar um novo cliente.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="NomeCliente">Nome</Label>
              <Input id="name-1" name="name" defaultValue="Denner" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="DescriçãoCliente">Descrição</Label>
              <Input
                id="username-1"
                name="username"
                defaultValue="Cliente que tem 5 supermecados "
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="ModeloNegocioCliente">
                Modelo de negocio do cliente
              </Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
            <div className="grid gap-3">
              {/* adicionar component de monetário */}
              <Label htmlFor="contratoCliente">
                Valor do contrato do cliente
              </Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
            <div className="grid gap-3">
              {/* adicionar component de monetário */}
              <Label htmlFor="contratoCliente">
                Valor do contrato do cliente
              </Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="DataInicioCliente">
                Data de inicio do contrato
              </Label>
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={
                  selected
                    ? `Começou no dia: ${selected.toLocaleDateString()}`
                    : "Pick a day."
                }
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit" className="cursor-pointer ">
              Adicionar
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
