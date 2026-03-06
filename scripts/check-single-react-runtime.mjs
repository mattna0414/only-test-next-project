import fs from 'node:fs';
import { createRequire } from 'node:module';

const rootRequire = createRequire(new URL('../package.json', import.meta.url));
const dstestRequire = createRequire(
  new URL('../node_modules/@gkssk/dstest/package.json', import.meta.url),
);

function resolveRealPath(requireFn, pkgName) {
  return fs.realpathSync(requireFn.resolve(pkgName));
}

const checks = [
  ['react', resolveRealPath(rootRequire, 'react'), resolveRealPath(dstestRequire, 'react')],
  [
    'react-dom',
    resolveRealPath(rootRequire, 'react-dom'),
    resolveRealPath(dstestRequire, 'react-dom'),
  ],
];

const mismatches = checks.filter(([, fromRoot, fromDstest]) => fromRoot !== fromDstest);

if (mismatches.length > 0) {
  console.error('Multiple React runtimes detected between app and @gkssk/dstest:');
  for (const [pkgName, fromRoot, fromDstest] of mismatches) {
    console.error(`- ${pkgName}`);
    console.error(`  app:    ${fromRoot}`);
    console.error(`  dstest: ${fromDstest}`);
  }
  process.exit(1);
}

console.log('App and @gkssk/dstest resolve to the same react/react-dom runtime.');
