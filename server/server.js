import './dotenv.js';
import http from 'http';
import app from './app.js';

// Zeebe workers
import './workers/pushworker.js';
import './workers/emailworker.js';
import './workers/get-next-event.js';

const port = process.env.PORT ?? 3001;

const server = http.createServer(app);

server.listen(port, () => console.log('Listening on ' + port));
