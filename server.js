const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/crypto', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './src/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });

console.log(path.resolve(__dirname, 'build'))