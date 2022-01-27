const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/crypto', (req, res) => {
    console.log('main_page works')
    res.status(200).sendFile(path.resolve(__dirname, './src/index.html'));
})

app.use((req, res) => res.sendStatus(404));

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });

console.log(path.resolve(__dirname, 'build'))