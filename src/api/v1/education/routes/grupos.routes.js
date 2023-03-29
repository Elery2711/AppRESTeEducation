//Grupos
import { Router } from 'express';
import * as GruposController from '../controllers/grupo.controller';
const router = Router();
//Router.get('/list', ProdServController.getProdServList);
router.get(`/`, GruposController.getGruposList);
//router.get('/item/:ficIdProdServ', prodServController.getProdServItem);
router.get(`/OK:id`, GruposController.getGruposItemOK);
router.get(`/:id`, GruposController.getGruposItem);
router.post('/', GruposController.postGruposItem);
router.put('/:id', GruposController.putGrupoItem);
router.put('/:id', GruposController.putGrupo);
router.put('/:id', GruposController.putGrupoItemOK);
router.put('/:id', GruposController.putGrupoSubDoc);
router.delete('/:id', GruposController.deleteGrupoItem);
router.delete('/:id', GruposController.deleteGrupo);

export default router;