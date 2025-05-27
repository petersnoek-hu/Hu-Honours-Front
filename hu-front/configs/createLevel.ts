import { LevelConfig, LevelFeatures } from "@/types/level.types";

export function createLevel(
  baseConfig: Omit<LevelConfig, 'features'>,
  featureHandler: (features: Partial<LevelFeatures>) => LevelConfig['features']
): (features?: Partial<LevelFeatures>) => LevelConfig {
  return (features: Partial<LevelFeatures> = {}) => ({
    ...baseConfig,
    features: featureHandler(features)
  });
}