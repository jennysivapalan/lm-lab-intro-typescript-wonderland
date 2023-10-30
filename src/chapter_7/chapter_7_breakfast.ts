import { askQuestion, clear, print } from "../ui/console";
import { parseMealInput, parseDrinkInput } from "../ui/parse_input";
import { MEALS, EGGS, MealType, Breakfast, DRINKS } from "./chapter_7.types";
import { haveAdventures } from "../..";

export function timeForBreakfast(): void {
  clear(true);
  print("--------------------------");
  print(
    "| Well that was a weird night! What's that noise, is it your tummy rumbling?|"
  );
  print("--------------------------");
  MEALS.forEach((m, i) => print(`   ${i} - ${m}`));
  askQuestion("Which number breakfast would you like?", chooseMeal);
}

function chooseMeal(input: string) {
  const meal = parseMealInput(input);

  if (meal === undefined) {
    printError(input);
  } else {
    if (meal === "I'll pass on a meal") {
      print("No meal for you?! I thought you were hungry?");
      DRINKS.forEach((d, i) => print(`   ${i} - ${d}`));

      askQuestion("How about a drink instead?", chooseDrink);
    } else {
      const breakfast = new Breakfast();
      breakfast.meal = meal;
      createBreakfast(breakfast);
    }
  }
}

function createBreakfast(breakfast: Breakfast) {
  print("I am going to randomly choose an egg option for you!");

  EGGS.forEach((e, i) => print(`   ${i} - ${e}`));
  print("🍳🍳🍳🍳🍳");

  const randomIndex = Math.floor(Math.random() * (EGGS.length + 1));

  randomIndex === EGGS.length ? null : (breakfast.eggs = EGGS[randomIndex]);

  breakfast.eggs
    ? print(
        `Great you'll get ${breakfast.meal} and ${breakfast.eggs}} eggs 🍳!`
      )
    : print(`Sorry no eggs for you but you will get ${breakfast.meal}`);
}

function chooseDrink(input: string) {
  const drink = parseDrinkInput(input);

  if (drink === undefined) {
    printError(input);
  } else {
    print(`Great you'll get ${drink}!`);
  }
}

function printError(input: string) {
  print(`😮`);
  print(
    `${input} is an invalid input 😭. You must still be tired, it's probably best to go back to bed and have an adventure.`
  );
  return askQuestion("Press ENTER to re-enter Wonderland! ", haveAdventures);
}
