const mockIndividual = require('./mock-individual.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next();
})

// create a GET route
app.get('/api/individual', (req, res) => {
  res.send({items: [mockIndividual], total: 1});
});
