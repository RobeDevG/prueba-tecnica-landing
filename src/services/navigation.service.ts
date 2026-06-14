import { NavigationApi } from "@/api/navigation.api";

export async function getNavigation() {
  return NavigationApi.getNavigation();
}
