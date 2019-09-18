import express from 'express';
import Helpers from './utils/helpers';
import routes from './routes/otp';

const { errorResponse } = Helpers;

// Create global app object
const app = express();

// express config
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

// connect app to routes
app.use('/api', routes);

// catch routes not in use
app.use('*', (req, res) => {
  errorResponse(res, 404, 'You typed in the wrong URL');
});

const PORT = process.env.PORT || 3000;

// start server
app.listen(PORT, () => console.log(`App running on port: ${PORT}`));

export default app;
