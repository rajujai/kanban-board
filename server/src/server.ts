import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import dbConnection from './configs/db';
import boardApi from './controllers/board.controller';
import columnApi from './controllers/column.controller';
import itemApi from './controllers/item.controller';

const app: express.Application = express();
const PORT = process.env.PORT || 8080;


app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));

app.use("/api/board", boardApi);
app.use("/api/column", columnApi);
app.use("/api/item", itemApi)

app.get('/', (req: Request, res: Response) => {
    res.send("Kanban board Application");
});


app.listen(PORT, async () => {
    await dbConnection();
    console.log(`Server running on port:${PORT}`);
});
