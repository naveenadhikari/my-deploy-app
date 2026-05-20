const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 hey there ! App working </h1>
    <p>Version: <strong>1.0.0</strong></p>

  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});