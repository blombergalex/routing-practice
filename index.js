import express from "express";
import flowRouter from "./routes/flowers.js";
import plantRouter from "./routes/plants.js";
import seedRouter from "./routes/seeds.js";
import * as path from 'path';

const app = express();
const port = 3000;
const __dirname = path.resolve();

console.log(__dirname);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/index.html')));

app.use('/flowers', flowRouter) // when user goes to /flowers -> use flowRouter

app.use('/plants', plantRouter)

app.use('/flowers', seedRouter)

app.listen(port, () => console.log(`Listening on port: ${port}`));
