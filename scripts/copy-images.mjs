import fs from "fs";
import path from "path";

const src = "src/content/blog";
const dest = "public/articles";

fs.readdirSync(src).forEach((dir) => {
  const srcDir = path.join(src, dir);
  const destDir = path.join(dest, dir);
  if (!fs.statSync(srcDir).isDirectory()) return;

  fs.readdirSync(srcDir).forEach((file) => {
    if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)) {
      fs.mkdirSync(destDir, { recursive: true });
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
      console.log(`Copied: ${dir}/${file}`);
    }
  });
});

console.log("Done copying images.");
