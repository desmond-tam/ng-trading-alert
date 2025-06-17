const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"../../dist/browser/index.html");
let content = fs.readFileSync(filePath, "utf8");
content = content.replace(/styles-/g,"/ng-trading-alert/styles-");
content = content.replace(/polyfills-/g, "/ng-trading-alert/polyfills-");
content = content.replace(/scripts-/g,"/ng-trading-alert/scripts-");
content = content.replace(/main-/g,"/ng-trading-alert/main-");
fs.writeFileSync(filePath, content, "utf8");

console.log("Text replaced successfully!");