import cors from 'cors';
import express from 'express';
import { routes } from './routes/routes.js';

// Path
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(cors());
app.use(routes);

// Server
const server = () => {
    app.listen(app.get('port'));
    console.log(`\x1B[36m Local server started:`);
    console.log(`\x1B[34m https://localhost:${app.get('port')}`);
}

server();