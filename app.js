const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3001;
const routes = require("./src/routes");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false  }));
app.use(bodyParser.json());

mongoose.connect(
	"mongodb+srv://admin:C4ncun2021@cluster0.omfim.mongodb.net/prueba_tecnica?retryWrites=true&w=majority", { useNewUrlParser: true  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Database connect.");
});

routes.getRoutes(app);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
