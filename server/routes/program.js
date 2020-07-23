import express from 'express';
import Program from '../models/program.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const all = await Program.find();
  const indexRandom = Math.floor(Math.random() * all.length);
  res.json(all[indexRandom]);
});

export default router;
