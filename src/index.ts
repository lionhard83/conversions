import express, {Request, Response, NextFunction} from 'express';
const app = express();
import fetch, {Response as R} from 'node-fetch';
import { Conversion } from './Conversion';

app.get('/alive', async (req: Request, res: Response) => {
    res.json({message: 'Il server è in running'});
});

app.get('/', async (req: Request, res: Response) => {
    const host = 'api.frankfurter.app';
    const response = await fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`);
    const conversion: Conversion = await response.json();
    res.json(conversion.amount);
});
const port = 5003;



app.listen(port, () => console.log('Server is running'));