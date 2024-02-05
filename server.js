'use strict';
const http = require('http');
const url = require('url');
const {getDate} = require('./modules/utils');
const { greetingMessage } = require('./lang/en/en');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (req.method === 'GET') {
        const name = parsedUrl.query.name || 'Batman';
        const currentDate = getDate();
        const responseMessage = `<div style="color: blue;">${greetingMessage.replace('%1', name)} ${currentDate}</div>`;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(responseMessage);
    }
}).listen(8000);
console.log('Listening on port 8000');