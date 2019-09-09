const fs = require('fs');
const path = require('path');
const ABSPATH = path.dirname(process.mainModule.filename); // Absolute path to our app directory
const NO_USAR = ['README.md', 'OtroFicheroExcluido.md'];

var md = require('/Users/lfigl/AppData/Roaming/npm/node_modules/markdown-it')({
    html:         true,        // Enable HTML tags in source
    xhtmlOut:     true,        // Use '/' to close single tags (<br />).
    });
  
fo = fs.openSync('xhtml/manual.xhtml', 'w');
s = fs.readFileSync('xhtml/cabecera.xhtml', 'utf8'); o=md.render(s); fs.appendFileSync(fo, o);

let files = fs.readdirSync(ABSPATH);
files.forEach(f => {
    if (f.endsWith(".md") && NO_USAR.indexOf(f) < 0){
        s = fs.readFileSync(f, 'utf8');
        o = md.render(s);
        fs.appendFileSync(fo, '\n\n<!-- '+f+' -->\n\n');
        fs.appendFileSync(fo, o);
        console.log(f);
    }
});

fs.appendFileSync(fo, "\n\n</body></html>\n");
fs.closeSync(fo);