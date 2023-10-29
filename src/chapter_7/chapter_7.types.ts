export const MEALS = [
  "Avocado Toast",
  "Big Fry up",
  "Just toast",
  "I'll pass on a meal",
];
export type MealType = (typeof MEALS)[number];

export const EGGS = [
  "Poached",
  "Scrambled",
  "Fried",
  "Hard Boiled",
  "No eggs",
] as const;
export type EggsType = (typeof EGGS)[number];

export class Breakfast {
  meal: MealType = "I'll pass on a meal";
  eggs?: EggsType = "No eggs";
}
