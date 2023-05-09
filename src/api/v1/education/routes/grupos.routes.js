//Grupos
import { Router } from 'express';
import * as GruposController from '../controllers/grupo.controller';
const router = Router();


//Router.get('/list', ProdServController.getProdServList);
router.get(`/`, GruposController.getGruposList);
//router.get('/item/:ficIdProdServ', prodServController.getProdServItem);
//GET ROUTES
router.get(`/OK/:id`, GruposController.getGruposItemOK);
router.get(`/BK/:id`, GruposController.getGruposItemBK);
router.get(`/PK/:id`, GruposController.getGruposItemPK);
router.get(`/PersonaOK/:id`, GruposController.getGruposItemPersonaOK);
router.get(`/PeriodoOK/:id`, GruposController.getGruposItemPeriodoOK);
router.get(`/InstitutoOK/:id`, GruposController.getGruposItemInstitutoOK);
router.get(`/CarreraOK/:id`, GruposController.getGruposItemCarreraOK);
router.get(`/AsignaturaOK/:id`, GruposController.getGruposItemAsignaturaOK);
router.get(`/Grupo/:id`, GruposController.getGruposItemGrupo);
router.get(`/Curso/:id`, GruposController.getGruposItemCurso);
router.get(`/GradoAca/:id`, GruposController.getGruposItemGradoAca);
////////////////////////////////////////////////////////////
//POST ROUTES
router.post(`/POST/GRUPOESTATUS/:id`, GruposController.postGruposEstatus);
//SUBDOCUMENTOS ROUTES
//////////////////////////////////////////////
//GRUPOS ESTATUS
router.post(`/POST/GRUPOESTATUS/:id`, GruposController.postGruposEstatus);
router.put(`/PUT/GRUPOESTATUS/:id1/:id2`, GruposController.setGruposEstatus);
router.delete(`/DELETE/GRUPOESTATUS/:id1/:id2`, GruposController.pullGruposEstatus);
//GRUPOS HORARIOS
router.post(`/POST/GRUPOHORARIO/:id`, GruposController.postGruposHorario);
router.put(`/PUT/GRUPOHORARIO/:id1/:id2`, GruposController.setGruposHorario);
router.delete(`/DELETE/GRUPOHORARIO/:id1/:id2`, GruposController.pullGruposHorario);
//GRUPOS PERSONAS
router.post(`/POST/GRUPOPERSONAS/:id`, GruposController.postGruposPersonas);
router.put(`/PUT/GRUPOPERSONAS/:id1/:id2`, GruposController.setGruposPersonas);
router.delete(`/DELETE/GRUPOPERSONAS/:id1/:id2`, GruposController.pullGruposPersonas);
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
router.get(`/:id`, GruposController.getGruposItem);
router.post('/', GruposController.postGruposItem);
router.put('/:id', GruposController.putGrupoItem);
router.put('/:id', GruposController.putGrupo);
router.put('/PUT/GRUPO/:id', GruposController.putGrupoItemOK);
router.put('/:id', GruposController.putGrupoSubDoc);
router.delete('/DELETE/GRUPO/:id', GruposController.deleteGrupoItem);
//router.delete('/:id', GruposController.deleteGrupo);

export default router;