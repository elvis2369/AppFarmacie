const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const useRouter = require('./api/users/user.router')
app.use(express.json());
app.use('/api',useRouter)
app.listen(5000,()=>{
    console.log('server up and running', 5000)
});