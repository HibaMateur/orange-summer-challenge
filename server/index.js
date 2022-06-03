
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from "./routes/user.js";
import licenseKeyRouter from "./routes/licensekey.js"
import bodyParser from 'body-parser';
dotenv.config();
const app = express();

app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({  extended: true }))
const CONNECTION_URL = process.env.CONNECTION_URL;
import itemsRouter from './routes/items.js'
app.use('/items',itemsRouter)

app.use("/user", userRouter);
app.use("/licensekey",licenseKeyRouter);
const PORT = process.env.PORT|| 3001;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
}));


