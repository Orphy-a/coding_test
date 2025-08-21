
const fs = require('fs');
const n = Number(fs.readFileSync(0, 'utf8').trim());

let out = '';
for (let i = 1; i <= n; i++) {
  out += '*'.repeat(i) + '\n';
}
process.stdout.write(out);