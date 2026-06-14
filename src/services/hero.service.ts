import { HeroApi } from "@/api/hero.api";

export async function getHero() {
  return HeroApi.getHero();
}
