import { LevelConfig, LevelFeatures } from "@/types/level.types";
import level1Config from "./config.level1";
import level2Config from "./config.level2";
import level3Config from "./config.level3";
import level4Config from "./config.level4";

type LevelConfigFunction = (features?: Partial<LevelFeatures>) => LevelConfig;

export const levelConfigs: Record<number, LevelConfigFunction> = {
  1: level1Config,
  2: level2Config,
  3: level3Config,
  4: level4Config,
};

export type LevelId = keyof typeof levelConfigs;
