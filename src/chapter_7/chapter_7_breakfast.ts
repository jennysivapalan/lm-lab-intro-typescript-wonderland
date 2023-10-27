import { askQuestion, clear, print } from "../ui/console";
import { parseMealInput } from "../ui/parse_input";
import { MEALS } from "./chapter_7.types";

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
    print(`😮`);
    print(
      `${input} is an invalid input 😭. You must still be tired, it's probably best to go back to bed and have an adventure`
    );
  }
}
