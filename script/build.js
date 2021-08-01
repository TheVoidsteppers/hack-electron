const fs = require('fs');
const path = require('path');
const themeJson = require('./theme')
const THEME_DIR = path.join(__dirname, '..', 'themes');
if (!fs.existsSync(THEME_DIR)) {
  fs.mkdirSync(THEME_DIR);
}
async function generate() {
  fs.writeFileSync(
    path.join(THEME_DIR, 'hack-electron-color-theme.json'),
    JSON.stringify(themeJson, null, 2)
  )
}
generate()