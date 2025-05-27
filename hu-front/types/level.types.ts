// Defenitie van de structuur van een level stap
export interface LevelStep {
  id: number;
  component: React.ReactElement;
}

// Defenitie van features die door een level gebruikt kunnen worden
export interface LevelFeatures {
  checklist?: {
    items: string[];
    checkedItems: boolean[];
    handleCheck: (index: number) => void;
  };
  inputFields?: {
    fields: React.ReactElement[];
    setFields: (fields: React.ReactElement[]) => void;
    values: string[]; // Toegevoegd
    setValues: (values: string[]) => void; // Toegevoegd
  };
  // Andere features
}

// Hoofdstructuur van een level
export interface LevelConfig {
  levelName: string;
  levelDescription: string;
  steps: LevelStep[];
  features?: LevelFeatures;
}
