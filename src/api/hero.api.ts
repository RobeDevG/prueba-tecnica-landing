import { getHeroMock } from "@/mock/landing.mock";
import type { Hero } from "@/domain/landing";

export interface HeroApiContract {
  getHero: () => Promise<Hero>;
}

export const HeroApi: HeroApiContract = {
  getHero: getHeroMock,
};
