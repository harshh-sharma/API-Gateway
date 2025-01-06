const express = require("express");
const { PORT } = require("./config");
const apiRouter = require("./routes");
const { default: rateLimit } = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
    windowMs:2*60*1000 ,// 2 minute
    max:4
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(limiter);

app.use('/api',apiRouter);


app.listen(PORT,() => {
    console.log(`server successfully running on ${PORT}`);
    
})