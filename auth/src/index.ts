import express from 'express';
// eslint-disable-next-line import/no-unresolved
import { currentUserRouter } from './routes/current-user.routes';
// eslint-disable-next-line import/no-unresolved
import { signinRouter } from './routes/signin.routes';
// eslint-disable-next-line import/no-unresolved
import { signupRouter } from './routes/signup.routes';
// eslint-disable-next-line import/no-unresolved
import { signoutRouter } from './routes/signout.routes';
// eslint-disable-next-line import/no-unresolved
import { errorHandler } from './middlewares/error-handler';

const app = express();
app.use(express.json());

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(errorHandler);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Activated, Listening on port ${PORT}!!!`);
});
