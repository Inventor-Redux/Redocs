const { writeFileSync } = require("fs");
const { parseFileTree } = require("./tree");
const readline = require("readline-sync");
let go = readline.question("Calculate Coverage? y/n: ");
while (go != "y" && go != "n") {
  go = readline.question("Invalid Input, Calculate Coverage? y/n: ");
}
if (go === "y") {
  writeFileSync("static/coverage.json", JSON.stringify(parseFileTree("docs")))
} else if (go === "n") {
  return;
}
