// later
// add option metadata for folders

console.log("Generating...");
import fs from "fs-extra";
import path from "path";

const BASE_DIR = "./src/templates";
const OUTPUT_FILE = "./public/data/templatesStructure.json";

const metadataFileName = "metadata.ts";
const specialFiles = ["index.tsx", metadataFileName];

async function scanTemplates(dir: string): Promise<TemplateStructure | null> {
  // const counter: Counter = { cols: 0, temps: 0 };

  const result: TemplateStructure = {
    cnt: {
      cols: 0,
      temps: 0,
    },
    tree: {},
  };

  const entries = fs.readdirSync(dir);
  let hasValidEntries = false;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);

    if (entry.includes("--ign")) {
      console.warn("Ignore: " + fullPath);
      continue;
    }

    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const files = fs.readdirSync(fullPath);
      if (specialFiles.every((file) => files.includes(file))) {
        const metadataPath = path.join(fullPath, metadataFileName);
        const relativePath = path
          .relative(BASE_DIR, fullPath)
          .replace(/\\/g, "/");

        try {
          const metadataModule = await import(
            "file://" + path.resolve(metadataPath)
          );
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          const metadata: TemplateMetadata = metadataModule.metadata;

          result.tree[entry] = {
            path: relativePath,
            otherFiles: files.filter((f) => !specialFiles.includes(f)) || [],
            metadata,
          };
          result.cnt.temps += 1;
          hasValidEntries = true;
        } catch (error) {
          console.error(`Error importing metadata for ${entry}:`, error);
          throw error;
        }
      } else {
        // Recursively scan nested folders and maintain structure
        const subResults = await scanTemplates(fullPath);
        if (subResults && Object.keys(subResults).length > 0) {
          result.cnt.cols += 1;
          result.cnt.temps += subResults.cnt?.temps;
          result.tree[entry] = subResults; //! only type error: `result[entry]`
          // result[entry] = { ...subResults, ...subCounter }; //! only type error: `result[entry]`
          hasValidEntries = true;
        }
      }
    }
  }
  console.log(Object.keys(result.tree), JSON.stringify(result.cnt));
  return hasValidEntries ? result : null;
}

// Usage
void (async () => {
  const templateStructure = (await scanTemplates(BASE_DIR)) ?? [];
  if (templateStructure) {
    fs.writeJsonSync(OUTPUT_FILE, templateStructure, { spaces: 0 });
    console.log(`JSON file saved at ${OUTPUT_FILE}`);
  } else {
    console.log("No valid templates found.");
  }
})();
