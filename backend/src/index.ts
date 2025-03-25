import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config({ path: path.normalize(`${__dirname}../../../env/backend.env`) });

const app: Express = express();
const port = process.env.PORT || 80;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
