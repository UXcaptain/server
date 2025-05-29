import { Router } from 'express';
import {
  deleteOneUserById,
  getAllUsers,
  getOneUserById,
} from '../../../controllers/adminController.mjs';
import { checkPermissionByRole } from '../../../middlewares/permissionByRoleChecker.mjs';

export const adminRouter = Router();

// TODO - fix authentication in tests

adminRouter.use(checkPermissionByRole('admin'));

adminRouter.get('/', getAllUsers);

adminRouter.get('/:userId', getOneUserById);

adminRouter.delete('/:userId', deleteOneUserById);

adminRouter.use('/*fallback', (req, res) => {
  res.send('The requested route is not available or does not exist'); //* Will catch failed requests even though they are authenticated & have the appropiate role
});
