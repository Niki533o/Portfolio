const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// firebase & dotenv later if  needed

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const commentRoutes = require('./routes/commentRoutes');
app.use('/comments', commentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});