import express from 'express';
import * as path from 'path';

const flowRouter = express.Router();
const __dirname = path.resolve();

// flowRouter.get('/', (req, res) => res.send('Welcome to the flower page'));
flowRouter.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/flowers.html')));

flowRouter.get('/lily', (req, res) => res.send('This is the page of lilies!'));

flowRouter.get('/sunflower', (req, res) => res.send('This is the sunflower page!'));

export default flowRouter;