import { ClientsApi } from "@/api/clients.api";

export async function getClients() {
  const clients = await ClientsApi.getClients();

  return clients.slice(0, 5);
}
