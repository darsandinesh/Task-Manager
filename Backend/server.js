import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import dbConnection from './config/dbConnection.js';
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


dbConnection();

// setting up the different routes;
app.use('/auth', authRouter);
app.use('/task', taskRouter);

const PORT = process.env.PORT || 8888

app.listen(PORT, () => console.log(`server started to run on PORT :${PORT}`));