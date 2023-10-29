import { Hole, HOLES } from "../chapter_1/chapter_1.types";
import {
  MealType,
  MEALS,
  DrinkType,
  DRINKS,
} from "../chapter_7/chapter_7.types";

// 💡 This `parseHoleInput` function exists to keep user input (which can be anything)
//    away from our logic, which we want to keep clean using our nice neat types like `Hole`
//    This function translates all possible user inputs into either:
//           a Hole    👈 if the input is valid
//			 undefined 👈 if the input is invalid
export function parseHoleInput(input: string): Hole | undefined {
  const chosenHole = parseInput(input, HOLES);
  return chosenHole ? HOLES[chosenHole] : undefined;
}

export function parseMealInput(input: string): MealType | undefined {
  const chosenMeal = parseInput(input, MEALS);
  return chosenMeal ? MEALS[chosenMeal] : undefined;
}

export function parseDrinkInput(input: string): DrinkType | undefined {
  const chosenDrink = parseInput(input, DRINKS);
  return chosenDrink ? DRINKS[chosenDrink] : undefined;
}

function parseInput(input: string, options: string[]) {
  const chosenOption = parseInt(input);
  if (isNaN(chosenOption)) {
    return undefined;
  }

  if (chosenOption < 0 || chosenOption > options.length - 1) {
    return undefined;
  }
  return chosenOption;
}
