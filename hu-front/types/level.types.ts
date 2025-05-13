export interface LevelStep {
  id: number;
  component: React.ReactElement;
}

export interface LevelConfig {
  levelName: string;
  levelDescription: string;
  steps: LevelStep[];
  checklistItems?: string[];
  color: string;
}
