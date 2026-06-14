import { getClientsMock } from "@/mock/landing.mock";
import type { Client } from "@/domain/landing";

export interface ClientsApiContract {
  getClients: () => Promise<Client[]>;
}

export const ClientsApi: ClientsApiContract = {
  getClients: getClientsMock,
};
