import express, { Express, Request, Response } from "express";

import customerController from "./controllers/Customer";
import deviceController from "./controllers/Device";
import usageController from "./controllers/Usage";

const app: Express = express();

app.use(express.json());

app.use('/', customerController);
app.use('/', deviceController);
app.use('/', usageController);

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});