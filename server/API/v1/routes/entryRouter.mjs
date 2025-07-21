import Router from 'express';

export const entryRouter = new Router();

entryRouter.use('/*fallback', (req, res) => {
  res.status(404).send('The requested route is not available or does not exist'); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
