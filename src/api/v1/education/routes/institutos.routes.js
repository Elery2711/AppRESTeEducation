//Education
import { Router } from 'express';
import * as InstitutosController from '../controllers/instituto.controller';
const router = Router();
//ficRouter.get('/list', ProdServController.getProdServList);
router.get(`/`, InstitutosController.getInstitutosList);
//router.get('/item/:ficIdProdServ', prodServController.getProdServItem);
router.get(`/:id`, InstitutosController.getInstitutosItem);
router.post('/', InstitutosController.postInstitutosItem);
//FIC: route add many persons for web/pwa
router.post('/many-pwa', InstitutosController.addManyPersonsPWA);
router.put('/:id', InstitutosController.putInstitutoItem);
router.delete('/:id', InstitutosController.deleteInstitutoItem);
export default router;