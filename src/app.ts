import express, { Application, Request, Response } from 'express';
import 'dotenv/config';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('TS App is Running');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});
