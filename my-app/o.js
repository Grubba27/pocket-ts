import { readFile, writeFile } from "fs/promises";
const main = async () => {
  const typesFile = await readFile("./db.d.ts", "utf8");
  const [_, ...types] = typesFile.split("export");
  /**
   *
   * @param {string[]} type
   */
  const makeDBInterfaceMap = (type) => {
    const m = type
      .map((t) => {
        const [_, n] = t.split("interface");
        return n.split("{")[0].trim();
      })
      .reduce(
        (acc, name) => `${acc} \n   ${name.toLowerCase()}: ${name}; \n`,
        `export interface DB { \n`
      );
    const end = () => `\n } \n`;
    return m + end();
  };
  const dbInterface = makeDBInterfaceMap(types);
  await writeFile("./db.d.ts", typesFile + dbInterface, "utf8");
  console.log("Done")
};

main();
