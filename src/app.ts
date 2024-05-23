import express, { Request, Response } from 'express';
import { errorHandler } from './middlewares/errorHandler';
import { allRouters } from './routes';
const app = express();

// parser middleware
app.use(express.json());

app.use(allRouters)

app.all("*", (req: Request, res: Response)=>{
  res.status(404).json({
    message: "Route not Found!"
  })
})
app.use(errorHandler)
export default app;