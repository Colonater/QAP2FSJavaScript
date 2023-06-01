const http = require('http');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Get the requested URL
  const url = req.url;
 // task 4 switch statement
  // Use a switch statement to determine the action based on the route requested
  switch (url) {
    case '/GTR':
      // Action for the "/GTR" route
      const GTRPath = path.join(__dirname, 'public', 'GTR.html');
      // Read the HTML file from disk 
      fs.readFile(GTRPath, 'utf8', (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
      break;

    case '/Evo':
      // Action for the "/Evo" route
      const EvoPath = path.join(__dirname, 'public', 'Evo.html');
      fs.readFile(EvoPath, 'utf8', (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
      break;

    case '/Subaru':
      // Action for the "/Subaru" route
      const SubaruPath = path.join(__dirname, 'public', 'Subaru.html');
      fs.readFile(SubaruPath, 'utf8', (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
      break;

    case '/Porsche':
      // Action for the "/Porsche" route
      const PorschePath = path.join(__dirname, 'public', 'Porsche.html');
      fs.readFile(PorschePath, 'utf8', (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
      break;

    default:
      // Action for other routes or the root route "/"
      const indexPath = path.join(__dirname, 'public', 'index.html');
      fs.readFile(indexPath, 'utf8', (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
      break;
  }
});

const hostname = 'localhost';
const port = 3000;

// task 5 Instantiate an event emitter
const myEmitter = new EventEmitter();

// task 6 register an event listner
myEmitter.on('statusCode', (statusCode) => {
  //task 7 log route to console
    console.log(`HTTP Status Code: ${statusCode}`);
});

// Event: Warnings and errors
myEmitter.on('warningError', (message) => {
  console.log(`Warning/Error: ${message}`);
});

// Event: Specific route accessed
myEmitter.on('routeAccessed', (route) => {
  console.log(`Route Accessed: ${route}`);
});

// Event: Non-home routes
myEmitter.on('nonHomeRoute', (route) => {
  console.log(`Non-Home Route: ${route}`);
});

// Event: File successfully read
myEmitter.on('fileRead', (filename) => {
  console.log(`File Read: ${filename}`);
});

// Event: File not available
myEmitter.on('fileNotAvailable', (filename) => {
  console.log(`File Not Available: ${filename}`);
});
//user story 3
// Create a function to emit events based on different scenarios
const emitEvent = (req, res) => {
  const url = req.url;

  switch (url) {
    case '/GTR.html':
      const GTRPath = path.join(__dirname, 'public', 'GTR.html');
      fs.readFile(GTRPath, 'utf8', (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
      break;

    case '/Evo.html':
      const EvoPath = path.join(__dirname, 'public', 'Evo.html');
      fs.readFile(EvoPath, 'utf8', (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
      break;

    case '/Subaru.html':
      const SubaruPath = path.join(__dirname, 'public', 'Subaru.html');
      fs.readFile(SubaruPath, 'utf8', (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
      break;

    case '/Porsche.html':
      const PorschePath = path.join(__dirname, 'public', 'Porsche.html');
      fs.readFile(PorschePath, 'utf8', (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
      break;

    default:
      const indexPath = path.join(__dirname, 'public', 'index.html');
      fs.readFile(indexPath, 'utf8', (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
      break;
  }
};

// Modify the server logic to emit events based on different scenarios
const serverLogic = (req, res) => {
  emitEvent(req, res);

  const indexPath = path.join(__dirname, 'public', 'index.html');
  fs.readFile(indexPath, 'utf8', (err, content) => {
    if (err) {
      myEmitter.emit('fileNotAvailable', 'index.html');
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
    } else {
      myEmitter.emit('fileRead', 'index.html');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
};
//User Story 1
// Function to log events to disk
function logEventToFile(event) {
    const today = new Date();
    const date = today.toISOString().split('T')[0];
    const logDir = path.join(__dirname, 'logs');
    const logFile = path.join(logDir, `log-${date}.txt`);
    const logMessage = `${today.toISOString()} - ${event}\n`;
  
    // Create the log directory if it doesn't exist
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }
  
    // Append the log message to the file
    fs.appendFile(logFile, logMessage, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      }
    });
  }
  
  // Usage example
  logEventToFile('System started');

// Attach the serverLogic function as the request handler
server.on('request', serverLogic);

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
