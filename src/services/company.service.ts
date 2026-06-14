import { CompanyApi } from "@/api/company.api";

export async function getCompanyInfo() {
  return CompanyApi.getCompanyInfo();
}
