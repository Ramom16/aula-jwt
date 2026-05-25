import express from "express";
import router from "./routes/router.js";
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use('/', router);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${process.env.SERVER_PORT}`)
});