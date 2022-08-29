require('dotenv').config();
const express = require('express');
const { hidePoweredBy } = require('helmet');
const app = express();

app.use(hidePoweredBy());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	const number = Math.floor(Math.random() * 5);

	res.render('index', { number });
});

app.listen(process.env.PORT, () => {
	console.log(`App is ready, http://127.0.0.1:${process.env.PORT}`);
});