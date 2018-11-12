const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5003;

const app = express();
app.use(express.static(path.join(__dirname,'public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname,'public','index.html'));
})

app.listen(PORT, () =>console.log(`server is listening on port: ${PORT}`));