import { ClientsApi } from "@/api/clients.api";

export async function getClients() {
  return ClientsApi.getClients();
}
