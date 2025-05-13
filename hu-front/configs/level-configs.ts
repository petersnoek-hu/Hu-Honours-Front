import { LevelConfig } from "@/types/level.types";
import level1Config from "./config.level1";

type LevelConfigFunction = (
  checkedItems: boolean[],
  handleCheck: (index: number) => void
) => LevelConfig;

export const levelConfigs: Record<number, LevelConfigFunction> = {
  1: level1Config,
};

export type LevelId = keyof typeof levelConfigs;
