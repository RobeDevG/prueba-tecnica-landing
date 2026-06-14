import { getCompanyInfoMock } from "@/mock/landing.mock";
import type { CompanyInfo } from "@/domain/landing";

export interface CompanyApiContract {
  getCompanyInfo: () => Promise<CompanyInfo>;
}

export const CompanyApi: CompanyApiContract = {
  getCompanyInfo: getCompanyInfoMock,
};
