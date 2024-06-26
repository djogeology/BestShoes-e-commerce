
const express = require("express");
const cors = require('cors')
const db=require('./Database/index')
const app = express();
const port = 3000;
const adminsRouter = require('./routes/Admins');
// Const brandsRouter = require('./routes/Brands');
// const categoriesRouter = require('./routes/Categories');
// Const productsRouter = require('./routes/Products');
const stylesRouter = require('./routes/Styles');
const usersRouter = require('./routes/Users');


//use your middleware for CORS
app.use(cors())
//use the middleware for transforming the data from json to js
app.use(express.json())
// app.use(express.urlencoded({extended:time}))
app.use('/api/admins', adminsRouter);



app.listen(port, () => {
  console.log(`Express app listening on port http://localhost:${port}`);
});
module.exports=app;

