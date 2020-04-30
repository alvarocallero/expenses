const path = require("path");
const express = require('express'); //load express
const app = express(); //create a instance of express
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); //what to serve

app.get('*', (req,res) => {
    res.sendFile( path.join(publicPath, 'index.html'));
}); //avoid fail when refresh a page

app.listen(port, () => {
    console.log('Server is up!');
}) //start up the server