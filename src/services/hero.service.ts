import { HeroApi } from "@/api/hero.api";
import type { Hero } from "@/domain/landing";

export async function getHero(): Promise<Hero> {
  return HeroApi.getHero();
}
