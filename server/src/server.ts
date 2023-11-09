const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const boardRoutes = require('./routes/boardRoutes.ts');
const columnRoutes = require('./routes/columnRoutes.ts');
const itemRoutes = require('./routes/itemRoutes.ts');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));

app.use("/board", () => boardRoutes);
app.use("/column", () => columnRoutes);
app.use("/item", () => itemRoutes)


app.listen(PORT, async () => {
    await mongoose.connect(process.env.MONGO_DB || "");
    console.log(`Server running on port:${PORT}`);
});
