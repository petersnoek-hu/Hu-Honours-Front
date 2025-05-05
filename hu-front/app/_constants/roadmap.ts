// app/constants/roadmap.ts
export type RoadmapItem =
  | { type: "level"; level: number; titel: string; inset?: boolean }
  | { type: "divider"; challenge: string };

export const roadmap: RoadmapItem[] = [
  { type: "level", level: 1, titel: "Eerste stappen" },
  { type: "level", level: 2, titel: "Jouw verhaal in beeld"},

  { type: "divider", challenge: "Inleiding" },

  { type: "level", level: 3, titel: "Level 3" },
  { type: "level", level: 4, titel: "Level 4"},
  { type: "level", level: 5, titel: "Level 5" },

  { type: "divider", challenge: "Challenge 2" },

  { type: "level", level: 6, titel: "Level 6" },
  { type: "level", level: 7, titel: "Level 7" },
  { type: "level", level: 8, titel: "Level 8" },

  { type: "divider", challenge: "Challenge 3" },

  { type: "level", level: 9, titel: "Level 9" },
  { type: "level", level: 10, titel: "Level 10" },

  { type: "divider", challenge: "Afsluiting" },

  { type: "level", level: 11, titel: "Level 11" },
  { type: "level", level: 12, titel: "Level 12" },
  { type: "level", level: 13, titel: "Level 13" },
  { type: "level", level: 14, titel: "Level 14" },

  { type: "divider", challenge: "Bonus Levels" },

  { type: "level", level: 15, titel: "Level 15" },
  { type: "level", level: 16, titel: "Level 16" },

  { type: "divider", challenge: "Expert Track" },

  { type: "level", level: 18, titel: "Level 18" },
  { type: "level", level: 19, titel: "Level 19" },
  { type: "level", level: 20, titel: "Level 20" },
];
