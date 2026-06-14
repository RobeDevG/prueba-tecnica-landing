import { ClientsApi } from "@/api/clients.api";
import type { Client } from "@/domain/landing";

export async function getClients(): Promise<Client[]> {
  const clients = await ClientsApi.getClients();

  return clients.slice(0, 5);
}
