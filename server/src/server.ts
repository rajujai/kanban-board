const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const boardApi = require('./controllers/board.controller.ts');
const columnApi = require('./controllers/column.controller.ts');
const itemApi = require('./controllers/item.controller.ts');

const app = express();
const PORT = process.env.PORT || 8080;


app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));

app.use("/api/board", ()=> boardApi);
app.use("/api/column", ()=> columnApi);
app.use("/api/item", ()=> itemApi)


app.listen(PORT, async () => {
    await mongoose.connect(process.env.MONGO_DB || "");
    console.log(`Server running on port:${PORT}`);
});
