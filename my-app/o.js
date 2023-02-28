import { readFile, writeFile } from "fs/promises";
const main = async () => {
  const typesFile = await readFile("./db.d.ts", "utf8");
  console.log("generating types please wait :)");
  const [_, ...types] = typesFile.split("export");
  /**
   *
   * @param {string[]} type
   */
  const getNamesMap = (type) => {
    const semiMap = type
      .map((t) => {
        const [_, n] = t.split("interface");
        return n.split("{")[0].trim();
      })
      .reduce(
        (acc, name) => `${acc} \n   ${name.toLowerCase()}: ${name}; \n`,
        `export interface DB { \n`
      );
    const endInterface = () => `\n } \n`;
    return semiMap + endInterface();
  };
  const endFile = getNamesMap(types);
  await writeFile("./db.d.ts", typesFile + endFile, "utf8");
  console.log("Done")
};

main();
