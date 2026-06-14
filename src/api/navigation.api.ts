import { getNavigationMock } from "@/mock/landing.mock";
import type { MenuItem } from "@/domain/landing";

export interface NavigationApiContract {
  getNavigation: () => Promise<{
    title: string;
    menuItems: MenuItem[];
  }>;
}

export const NavigationApi: NavigationApiContract = {
  getNavigation: getNavigationMock,
};
