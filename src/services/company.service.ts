import { CompanyApi } from "@/api/company.api";
import type { CompanyInfo } from "@/domain/landing";

export async function getCompanyInfo(): Promise<CompanyInfo> {
  return CompanyApi.getCompanyInfo();
}
