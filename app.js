import Search from './search/routes.js';
import express from 'express';
import cors from "cors";

const app = express();
app.use(cors());
app.get('/hello', (req, res) => {
  res.send('Life is good!');
});

app.get('/', (req, res) => {
  res.send('Welcome to Full Stack Development!!!');
});

// Create a new route for fetching an eBay item
Search(app);
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
