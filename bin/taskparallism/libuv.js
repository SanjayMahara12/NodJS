
/* Libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops.
•	Event loop,
•	Asynchronous file and file system operations
•	Asynchronous TCP and UDP sockets
•	Child processes
•	Thread pool
•	Timers, signals, and polls

By handling all these features, libuv enables Node.js to work as a single-threaded, non-blocking, and event-driven platform.

 */

const fs = require('fs');
const net = require('net');

// Read the contents of the file asynchronously
fs.readFile('./data/file.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // Create a TCP server
  const server = net.createServer((socket) => {
    // Send the file contents over the connection
    socket.write(data);
    socket.end();
  });

  // Listen for connections on port 3000
  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
});
