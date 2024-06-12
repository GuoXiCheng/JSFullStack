import yaml from "js-yaml";
import fs from "fs";

export default function getSidebar() {
  const sidebar = fs
    .readdirSync("src/.vitepress/sidebars")
    .reduce(
      (acc, file) =>
        (acc +=
          fs.readFileSync(`src/.vitepress/sidebars/${file}`, "utf8") + "\n"),
      ""
    );
  return yaml.load(sidebar);
}
