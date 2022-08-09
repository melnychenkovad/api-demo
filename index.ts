import express, {Request, Response, NextFunction} from 'express';
import usersRouter from "./users/users";

const port = 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/error', (req, res) => {
    throw new Error('BOOMM!');
});

app.use('/users', usersRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    res.status(500).send('Something went wrong');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
