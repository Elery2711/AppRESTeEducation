//Education
import { Router } from 'express';
import config from '../../../../config/config';
// Import Routes
import institutosRoutes from './institutos.routes';
import gruposRoutes from './grupos.routes';
//import ordersRoutes from './orders.routes';
const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;
  app.use(api, router);
  // Routes
  router.use('/institutos', institutosRoutes);
  router.use('/grupos', gruposRoutes);
  //router.use('/orders', ordersRoutes);
  // Return Router
  return router;
};
module.exports = routerAPI;

