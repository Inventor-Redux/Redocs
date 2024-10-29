const { readdirSync, readFileSync, statSync } = require("fs");
const path = require("path");
const fm = require("front-matter");
const parseFileBranch = (branchDirectory) => {
  let finishedFiles = 0;
  let totalFiles = 0;
  let breakdown = [];
  let table = []
  const fileTree = readdirSync(branchDirectory);
  fileTree.forEach((file) => {
    const filePath = path.join(branchDirectory, file);
    const stats = statSync(filePath);
    if (stats.isDirectory()) {
      const subTree = parseFileBranch(filePath);
      finishedFiles += subTree.finishedFiles;
      totalFiles += subTree.totalFiles;
      breakdown.push(...[subTree.breakdown]);
      table.push(...subTree.table)
    } else if (
      stats.isFile() &&
      (path.extname(file) === ".md" || path.extname === ".mdx")
    ) {
      totalFiles++;
      const fileContent = readFileSync(filePath, "utf8");
      const { attributes } = fm(fileContent);
      if (attributes?.finished) {
        finishedFiles++;
      }
    }
  });
  return {
    main: {finishedFiles: finishedFiles,
    totalFiles: totalFiles,
    breakdown: [
      {
        coverage: ((finishedFiles / totalFiles) * 100).toFixed(2),
        name: branchDirectory,
        finishedFiles: finishedFiles,
        totalFiles: totalFiles,
        breakdown: [...breakdown],
      }
    ]},
    table: [
      ...table, {
        coverage: ((finishedFiles / totalFiles) * 100).toFixed(2),
        name: branchDirectory,
        finishedFiles: finishedFiles,
        totalFiles: totalFiles
      }
    ]
  };
};
const parseFileTree = (directory) => {
  console.log("Traversing File Structure...");
  let parsedFileTree = parseFileBranch(directory);
  parsedFileTree = {
    coverage: (
      (parsedFileTree.finishedFiles / parsedFileTree.totalFiles) *
      100
    ).toFixed(2),
    ...parseFileBranch(directory),
  };
  console.log(
    "File Structure Analysis Complete! Current Global Coverage is ",
    parsedFileTree.coverage,
    "%"
  );
  console.table(parsedFileTree.table,["Coverage","Name","Finished Files","Total Files"])
  return parsedFileTree.main
};
module.exports = {
  parseFileTree,
};
