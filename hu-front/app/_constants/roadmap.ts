// app/constants/roadmap.ts
export type RoadmapItem =
  | { type: "level"; level: number; titel: string; inset?: boolean }
  | { type: "divider"; challenge: string };

export const roadmap: RoadmapItem[] = [
  { type: "level", level: 1, titel: "Eerste stappen" },
  { type: "level", level: 2, titel: "Jouw verhaal in beeld" },

  { type: "divider", challenge: "Inleiding" },

  { type: "level", level: 3, titel: "Wees proactief" },
  { type: "level", level: 4, titel: "Cirkel van betrokkenheid en cirkel van invloed" },
  { type: "level", level: 5, titel: "Proactieve vs. reactive taal" },  
  { type: "level", level: 6, titel: "Vergroten van betrokkenheid en invloed" },

  { type: "divider", challenge: "Challenge 2" },

  { type: "level", level: 7, titel: "Ik ga op reis en neem mee" },
  { type: "level", level: 8, titel: "Betekenisvolle ontmoetingen" },  
  { type: "level", level: 9, titel: "Persoonlijke missie" },

  { type: "divider", challenge: "Challenge 3" },

  { type: "level", level: 10, titel: "De vier dimensies" },  
  { type: "level", level: 11, titel: "Kritisch incident" },

  { type: "divider", challenge: "Challenge 4" },

  { type: "level", level: 12, titel: "Empathische communicatie" },

  { type: "divider", challenge: "Challenge 5" },

  { type: "level", level: 13, titel: "De stappen in geweldloze communicatie" },
  { type: "level", level: 14, titel: "Win/win" },

  { type: "divider", challenge: "Challenge 6" },

  { type: "level", level: 15, titel: "Werk synergetisch" },

  { type: "divider", challenge: "Challenge 7" },

  { type: "level", level: 16, titel: "Jij en de dimensies" },
    { type: "level", level: 17, titel: "Losse eindjes" },
  { type: "level", level: 18, titel: "Jouw persoonlijke masterplan" },
];
