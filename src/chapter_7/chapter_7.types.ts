export const MEALS = [
  "🥑 Avocado Toast",
  "🥓 Big Fry up",
  "🍞 Just toast",
  "🚫 I'll pass on a meal",
];
export type MealType = (typeof MEALS)[number];

export const EGGS = ["Poached", "Scrambled", "Fried", "Hard Boiled"] as const;
export type EggsType = (typeof EGGS)[number];

export const DRINKS = ["🍵 Tea", "☕ Coffee", "🧃 Orange Juice", "🚰 Water"];
export type DrinkType = (typeof DRINKS)[number];

export class Breakfast {
  meal?: MealType;
  eggs?: EggsType;
}
