"use client";
import ConteudoBox from "../styles/conteudoBox.module.scss";
import ContainerSideBar from "../styles/sidebar.module.scss";

import { ContainerBox } from "@/components/containerBox/containerBox";
import { ClientesBox } from "@/components/clientContainer/ClientesBox";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DateDashboard } from "@/components/dashboard/dateBoard";

import { useEffect, useState } from "react";

export default function Home() {
  const url = process.env.URL ?? "http://localhost:3000";

  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`${url}/api/users/getUsers`)
      .then((res) => res.json())
      .then(setClients);
  }, []);

  return (
    <SidebarProvider>
      <main className={ContainerSideBar.Container}>
        <div className={ConteudoBox.Container}>
          <ContainerBox />
          <DateDashboard clientes={clients} />
          <ClientesBox AllClients={clients} />
        </div>
      </main>
    </SidebarProvider>
  );
}
