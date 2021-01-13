import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
// import { GCP_INFO } from './config/gcp';
import apiRouter from "./routes/apiRouter";

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRouter);

const PORT = 4000;
app.listen(PORT, "0.0.0.0");
console.log(`Webserver listening to port ${PORT}...`);
