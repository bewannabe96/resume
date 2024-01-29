const pug = require('pug');
const fs = require('fs');

const compiledFunction = pug.compileFile('src/index.pug');

const rawContent = fs.readFileSync('src/content.json', 'utf8');
const content = JSON.parse(rawContent);

fs.writeFileSync('dist/index.html', compiledFunction(content));
