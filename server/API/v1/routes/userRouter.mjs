import { Router } from 'express';
import { getUserProfile } from '../../../controllers/userController.mjs';
import { deleteUser } from '../../../controllers/authController.mjs';
import { checkPermissionByRole } from '../../../middlewares/permissionByRoleChecker.mjs';

export const userRouter = Router();

// TODO - fix authentication in tests

userRouter.use(checkPermissionByRole('customer'));

userRouter.get('/', getUserProfile);

userRouter.delete('/', deleteUser);

userRouter.use('/*fallback', (req, res) => {
  res.status(404).send('The requested route is not available or does not exist');
}); //* Will catch failed requests even though they are authenticated & have the appropiate role
