
const express = require("express");
const cors = require('cors')
const db=require('./Database/index')
const app = express();
const port = 5001;


//use your middleware for CORS
app.use(cors())
//use the middleware for transforming the data from json to js
app.use(express.json())
// app.use(express.urlencoded({extended:time}))
app.listen(port, () => {
  console.log(`Express app listening on port http://localhost:${port}`);
});
module.exports=app;

