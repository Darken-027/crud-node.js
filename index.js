require("dotenv").config();

const express = require('express');
const app = express();

const mainRouter = require('./src/routes/main.routes');
app.use(mainRouter);

app.use('/productos', require('./src/routes/productos.router'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`htpp://localhost:${PORT}`));