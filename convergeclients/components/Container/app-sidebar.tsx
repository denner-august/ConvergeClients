"use client";
import { Users, Home, Settings, CreditCard } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { useEffect } from "react";

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Clientes",
    url: "#",
    icon: Users,
  },
  {
    title: "Faturamento",
    url: "#",
    icon: CreditCard,
  },
  {
    title: "Configurações",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { setOpenMobile, setOpen } = useSidebar();

  useEffect(() => {
    () => setOpenMobile(true);
    () => setOpen(true);
  }, []);

  return (
    <Sidebar side="left">
      <SidebarHeader className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl text-center text-traffic-blue-800">
            tráfego pago <br /> Gestão de Clientes
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
