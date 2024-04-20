const express = require('express');
const cors = require('cors');
const app = express();

// Allow all CORS requests for demonstration purposes
app.use(cors());

// Define your routes and other server logic here...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
