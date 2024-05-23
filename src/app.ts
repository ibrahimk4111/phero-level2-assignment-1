import express from 'express';
const app = express();

// parser middleware
app.use(express.json());

app.get("/", (req, res)=>{
  var a = 10;
  res.json({message: "hello", a})
})

export default app;