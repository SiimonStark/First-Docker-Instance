const app = require('express')();

app.get('/', (req, res) => res.json( { message: 'Docker is cool'} ) );

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('App listening on http://localhost:' + port))