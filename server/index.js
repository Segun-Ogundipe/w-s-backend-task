import express from 'express';

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.use('*', (req, res) => {
    res.status(404).json({(false, 404, 'You typed in the wrong URL');}
  });
