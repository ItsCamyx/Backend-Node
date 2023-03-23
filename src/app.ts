import express from 'express';
import { Request, Response, Router } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const router = Router();
const port: number = 3000;

router.get('/', (req: Request, res: Response) => {
    const helloworld = {message:'Aplicação funcionando com sucesso!'}
    res.send(helloworld);
});

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})