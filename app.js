const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to my-demo-app</h1>
    <h1>🚀 working   </h1>
    
    <p> trying something new  DAY 2</p>

  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});