import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist/assets');
const cssFiles = fs
  .readdirSync(distDir)
  .filter((file) => file.endsWith('.css'))
  .map((file) => path.join(distDir, file));

if (cssFiles.length === 0) {
  console.error('No built CSS file found in dist/assets.');
  process.exit(1);
}

const css = fs.readFileSync(cssFiles[0], 'utf8');

if (css.includes('@tailwind utilities')) {
  console.error('Tailwind utilities were not compiled: raw "@tailwind utilities" remains in output.');
  process.exit(1);
}

if (!css.includes('.w-8{')) {
  console.error('Expected Tailwind utility ".w-8" was not generated.');
  process.exit(1);
}

if (!css.includes('.text-2xl{')) {
  console.error('Expected Tailwind utility ".text-2xl" was not generated.');
  process.exit(1);
}

console.log('Tailwind utilities compiled correctly.');
