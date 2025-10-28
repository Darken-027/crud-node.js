
require("dotenv").config();
const express = require("express");
const app = express();

const V1WorkoutRouter = require('./v1/routes/workouRoutes');
const {swaggerDocnos: V1SwaggerDocs} = require('./v1/swagger')

const methodOverride = require("method-override"); 
app.use(methodOverride("_method"));

const layouts = require('express-ejs-layouts');

const path = require("path");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(layouts);
app.set("layout", "layouts/layout");    

const mainRouter = require('./src/routes/main.routes');
app.use(mainRouter);

app.use('/categorias', require('./src/routes/categorias.router'));
app.use('/productos', require('./src/routes/productos.router'));
app.use('/contacto', require('./src/routes/contacto.router'));

app.use('/api/v1/Workouts', V1WorkoutRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`htpp://localhost:${PORT}`));    
V1SawggerDocs(app, PORT);