
const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser  = require('body-parser')
const postRouter = require('./routes/posts.js')

const app = express();
const port = 3000;
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts',postRouter)


mongoose.connect("mongodb+srv://chikkam:zv4KQ13xPzN8Cbjn@cluster0.lkyo20b.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});