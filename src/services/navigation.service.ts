import { NavigationApi } from "@/api/navigation.api";
import type { MenuItem } from "@/domain/landing";

export async function getNavigation(): Promise<{
  title: string;
  menuItems: MenuItem[];
}> {
  return NavigationApi.getNavigation();
}
