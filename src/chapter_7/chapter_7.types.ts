export const MEALS = ["Avocado Toast", "Big Fry up", "Just toast"];
export type MealType = (typeof MEALS)[number];

export const EGGS = ["Poached", "Scrambled", "Fried", "Hard Boiled"] as const;
export type EggsType = (typeof EGGS)[number];
