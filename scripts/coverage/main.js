const { writeFileSync } = require("fs");
const { parseFileTree } = require("./tree");


  writeFileSync("static/coverage.json", JSON.stringify(parseFileTree("docs")))

