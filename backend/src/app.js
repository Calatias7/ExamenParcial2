import express from 'express';
import cors from 'cors';

import clientesRouter from './routes/clientes.js';
import ordenesRouter from './routes/ordenes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ ok: true, service: 'restaurante-ordenes-api' }));

app.use('/clientes', clientesRouter);
app.use('/ordenes', ordenesRouter);

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default app;
