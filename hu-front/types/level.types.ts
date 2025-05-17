export interface LevelStep {
  id: number;
  component: React.ReactElement;
}

export interface LevelFeatures {
  checklist?: {
    items: string[];
    checkedItems: boolean[];
    handleCheck: (index: number) => void;
  };
  inputFields?: {
    fields: React.ReactElement[];
    setFields: (fields: React.ReactElement[]) => void;
  };
}

export interface LevelConfig {
  levelName: string;
  levelDescription: string;
  steps: LevelStep[];
  color: string;
  features?: LevelFeatures;
}
