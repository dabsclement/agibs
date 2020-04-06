const express = require('express');
// const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 8000;


//set ejs and express Layouts
app.set('view engine', 'ejs');
//app.use(expressLayouts);

const router = require('./app/routes');
app.use('/', router);


// set static files
app.use(express.static(__dirname + '/public'));
 

app.listen(port, () => console.log(`server started ${port}!`))