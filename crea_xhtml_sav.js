const fs = require('fs');

var md = require('/Users/lfigl/AppData/Roaming/npm/node_modules/markdown-it')({
    html:         true,        // Enable HTML tags in source
    xhtmlOut:     true,        // Use '/' to close single tags (<br />).
    });
  
fo = fs.openSync('xhtml/manual.xhtml', 'w');
s = fs.readFileSync('xhtml/cabecera.xhtml', 'utf8'); o=md.render(s); fs.appendFileSync(fo, o);

//fs.appendFileSync(fo, "<?xml version='1.0' encoding='utf-8'?>\n<html xmlns='http://www.w3.org/1999/xhtml' lang='es' xml:lang='es'>\n<head>\n\t<link href='styles.css' rel='stylesheet' type='text/css'/>\n\t<title>DistoX + TopoDroid</title>\n</head>\n<body>\n\n");

s = fs.readFileSync('010-introduccion.md', 'utf8'); o=md.render(s); fs.appendFileSync(fo, o);
s = fs.readFileSync('020-entorno.md', 'utf8'); o=md.render(s); fs.appendFileSync(fo, o);
s = fs.readFileSync('030-glosario.md', 'utf8'); o=md.render(s); fs.appendFileSync(fo, o);
s = fs.readFileSync('040-teclas.md', 'utf8'); o=md.render(s); fs.appendFileSync(fo, o);
s = fs.readFileSync('050-reseteo.md', 'utf8'); o=md.render(s); fs.appendFileSync(fo, o);
s = fs.readFileSync('060-pantalla.md', 'utf8'); o=md.render(s); fs.appendFileSync(fo, o);
s = fs.readFileSync('070-config-distox.md', 'utf8'); o=md.render(s); fs.appendFileSync(fo, o);
s = fs.readFileSync('080-config-topodroid.md', 'utf8'); o=md.render(s); fs.appendFileSync(fo, o);

fs.appendFileSync(fo, "\n\n</body></html>\n");
fs.closeSync(fo);