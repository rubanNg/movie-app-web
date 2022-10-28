
const express = require('express');
const app = express();
const port =  process.env.NODE_ENV === "production" ? (process.env.PORT || 3000) : 9000; 
const path = require('path');

app.use(express.static(`${path.resolve(__dirname, "../dist")}`));

app.get('/', (req, res) => {
  res.render("index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});