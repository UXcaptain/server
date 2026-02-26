export const checkAuthentication = () => (req, res, next) => {
  // return next(); //* Enable for running unathed while debugging

  if (!req.isAuthenticated()) {
    return res.status(401).json(
      {
        message: 'The user is not authenticated',
      },
    );
  }

  return next();
};
