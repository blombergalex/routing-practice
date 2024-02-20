import express from 'express';
import path from 'path';

const seedRouter = express.Router({mergeParams: true});
const __dirname = path.resolve();

seedRouter.get('/:flowerType/seeds', (req, res) => {
  const flowerType = req.params.flowerType;
  const filepath = path.join(__dirname, `./views/${flowerType}seeds.html`);
  res.sendFile(filepath);
});

export default seedRouter;