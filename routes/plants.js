import express from 'express';
import * as path from 'path';

const plantRouter = express.Router();
const __dirname = path.resolve();

// plantRouter.get('/', (req, res) => res.send('Welcome to the plant page'))

plantRouter.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/plants.html')));

plantRouter.get('/zanzibar-gem', (req, res) => res.send("This is the Zanzibar Gem!"))

plantRouter.get('/monstera', (req, res) => res.send("This is the Monstera, aka Swiss cheese plant!"))

export default plantRouter;

