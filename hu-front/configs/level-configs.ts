import { LevelConfig, LevelFeatures } from "@/types/level.types";
import level1Config from "./config.level1";
import level2Config from "./config.level2";
import level3Config from "./config.level3";
import level4Config from "./config.level4";
import level5Config from "./config.level5";
import level6Config from "./config.level6";
import level7Config from "./config.level7";
import level8Config from "./config.level8";
import level9Config from "./config.level9";
import level10Config from "./config.level10";
import level11Config from "./config.level11";
import level14Config from "./config.level14";

type LevelConfigFunction = (features?: Partial<LevelFeatures>) => LevelConfig;

export const levelConfigs: Record<number, LevelConfigFunction> = {
  1: level1Config,
  2: level2Config,
  3: level3Config,
  4: level4Config,
  5: level5Config,
  6: level6Config,
  7: level7Config,
  8: level8Config,
  9: level9Config,
  10: level10Config,
  11: level11Config,
  14: level14Config,
};

export type LevelId = keyof typeof levelConfigs;
