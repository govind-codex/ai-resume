require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db'); 

async function startServer() {
  await connectDB();

  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
