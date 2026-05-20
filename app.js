const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 hey there ! App working   </h1>
    <h1>👋 made a change </h1>
    <p> trying something new </p>

  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});