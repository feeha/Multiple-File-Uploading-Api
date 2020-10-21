const express = require('express');
const ejs = require('ejs');
const imagesRouter = require('./views/images');

// Init app
const app = express();

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

app.use('/upload-images', imagesRouter );

app.get('/', (req, res) => res.render('../views/images'));

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));