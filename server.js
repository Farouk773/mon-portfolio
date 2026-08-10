// Lightweight Node.js local dev server for Farouk Bouraoui Portfolio
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.jsx': 'text/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

const server = http.createServer((req, res) => {
  let reqUrl = decodeURIComponent(req.url.split('?')[0]);
  if (reqUrl === '/') reqUrl = '/index.html';

  let filePath = path.join(ROOT_DIR, reqUrl);

  // If file doesn't exist directly at root, check inside /public
  if (!fs.existsSync(filePath)) {
    const publicPath = path.join(ROOT_DIR, 'public', reqUrl);
    if (fs.existsSync(publicPath)) {
      filePath = publicPath;
    }
  }

  let extname = String(path.extname(filePath)).toLowerCase();

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // Fallback for HTML page requests only
        if (!extname || extname === '.html') {
          fs.readFile(path.join(ROOT_DIR, 'index.html'), (err, indexContent) => {
            if (err) {
              res.writeHead(500);
              res.end('Server Error: ' + err.code);
            } else {
              res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
              res.end(indexContent, 'utf-8');
            }
          });
        } else {
          res.writeHead(404);
          res.end('File Not Found: ' + reqUrl);
        }
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code);
      }
    } else {
      const contentType = MIME_TYPES[extname] || 'application/octet-stream';
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache' 
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`  🚀 Farouk Bouraoui Portfolio Website`);
  console.log(`  Server running at: http://localhost:${PORT}`);
  console.log(`==================================================\n`);
});
