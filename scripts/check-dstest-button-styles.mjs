import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist/assets');
const cssFile = fs.readdirSync(distDir).find((file) => file.endsWith('.css'));

if (!cssFile) {
  console.error('No CSS output found in dist/assets.');
  process.exit(1);
}

const css = fs.readFileSync(path.join(distDir, cssFile), 'utf8');

const requiredTokens = ['.h-10{', '.px-8{', '.border-input{', '.bg-background{', '.rounded-md{'];
const missing = requiredTokens.filter((token) => !css.includes(token));

if (missing.length > 0) {
  console.error('DSTest button utility classes are missing from built CSS:');
  for (const token of missing) {
    console.error(`- ${token}`);
  }
  process.exit(1);
}

console.log('DSTest button utility classes are present in built CSS.');
