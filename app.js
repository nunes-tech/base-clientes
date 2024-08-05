require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
const router = require("./routers/router");
const conn = require("./db/conn");
const user = require("./models/User");
const address = require("./models/Address");
const session = require("express-session");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const flash = require("connect-flash");
const helmet = require("helmet");
const csrf = require("csurf");
const { CheckCsrf, csrfToken } = require("./controllers/CheckController");

// Definindo o diretório views corretamente
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Servindo arquivos estáticos do diretório correto
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Configuração do express-session com Sequelize
const sessionOptions = session({
  secret: 'aggaggskknskbs-key-(000-555)__axcmvxz',
  store: new SequelizeStore({
    db: conn,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000 * 24 * 7, // 1 semana
    httpOnly: true
  },
});


app.use(sessionOptions);
app.use(flash());
app.use(helmet());
app.use(csrf());


//Middlewares
app.use(csrfToken);
app.use(CheckCsrf);
app.use(router);

conn.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Programa rodando na porta: ", PORT);
    });
}).catch(err => {
    console.log("Erro ao conectar no banco de dados, erro:", err);
});