require('dotenv').config();

import express from 'express';
import { json } from 'body-parser';
import routes from './routes';

const app = express();

app.use(json());

app.listen(process.env.PORT, () => {
    console.log(`App is running on port: ${process.env.PORT}`);
    routes(app);
});