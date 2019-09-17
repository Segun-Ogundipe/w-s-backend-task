import express from 'express';
import Helpers from './utils/helpers';

const { errorResponse } = Helpers;

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.use('*', (req, res) => {
  errorResponse(res, 404, 'You typed in the wrong URL');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App running on port: ${PORT}`));

export default app;
