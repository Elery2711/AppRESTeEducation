import * as GruposServices from '../services/grupos.services';
import boom from '@hapi/boom';

// : API GET
//---------------------------------------- Regresa 
// : Todos los Productos/Servicios. request , respond, pide y devuelve
export const getGruposList = async (req, res, next) => {
    try{
      const GruposList = await GruposServices.getGruposList();
      if (!GruposList) {
        throw boom.notFound('No se encontraron productos/grupos registrados.');
      } else if (GruposList) {
        res.status(200).json(GruposList);
      }

      } catch(error) {
        next(error);
      }
    };

// : Solo un Producto/Servicio.
export const getGruposItem = async (req, res, next) => {
    try {
      // : obtener parametro id mediante la
      //desestructuracion de objetos
      const { id } = req.params;
      // : se obtiene parametro de la forma
      //clase/objeto.
      //const idProdServ = req.params.id;
    const keyType = req.query.keyType || 'OK' ||'PK'||'PersonaOK'||'PeriodoOK'||'InstitutoOK'||'CarreraOK'||'AsignaturaOK'||'Grupo'||'Curso'||'GradoAca'||'TipoEstatusOK';
    const GruposItem = await GruposServices.getGruposItem(id, keyType);
    if (!GruposItem) {
      throw boom.notFound('No se encontraron productos/grupos registrados.');
    } else if (GruposItem) {
      res.status(200).json(GruposItem);
    }
  }catch(error){
    next(error);
  }
  };

  export const getGruposItemOK = async (req, res, next) => {
    try {
      // : obtener parametro id mediante la
      //desestructuracion de objetos
      const { id } = req.params;
      // : se obtiene parametro de la forma
      //clase/objeto.
      //const idProdServ = req.params.id;
    const GruposItem = await GruposServices.getGruposItemOK(id);
    if (!GruposItem) {
      throw boom.notFound('No se encontraron grupos registrados.');
    } else if (GruposItem) {
      res.status(200).json(GruposItem);
    }
  }catch(error){
    next(error);
  }
  };

// : API POST.
//----------------------------------------
// : API POST (ADD) Producto y/o Servicio.
export const postGruposItem = async (req, res, next) => {
  try {
    const paGrupoItem = req.body;
    const newGrupoItem = await GruposServices.postGrupoItem(paGrupoItem);
    if (!newGrupoItem) {
      throw boom.badRequest('No se pudo crear el Producto y/o Servicio.');
    } else if (newGrupoItem) {
      res.status(201).json(newGrupoItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const putGrupoItemOK = async (req, res, next) => {
  try {
  const { id } = req.params;
      console.log(' : controller id -> ', id);
  const paGrupoItem = req.body;
      console.log(' : controller body -> ', paGrupoItem);
  const updatedGrupoItem = await GruposServices.putGrupoItemOk(id, paGrupoItem);
  if (!updatedGrupoItem) {
  throw boom.badRequest('No se pudo actualizar el Grupo.');
  } else if (updatedGrupoItem) {
  res.status(200).json(updatedGrupoItem);
  }
  } catch (error) {
  next(error);
  }
};

export const putGrupoItem = async (req, res, next) => {
  try {
  const { id } = req.params;
      console.log(' : controller id -> ', id);
  const paGrupoItem = req.body;
      console.log(' : controller body -> ', paGrupoItem);
      const keyType = req.query.keyType || 'OK' ||'PK'||'grupos_estatusPOST'||'TipoEstatusOK'||'grupos_horariosPOST'||'grupos_personasPOST'||'detail_rowPOST';
  const updatedGrupoItem = await GruposServices.putGrupoItem(id, paGrupoItem,keyType);
  if (!updatedGrupoItem) {
  throw boom.badRequest('No se pudo actualizar el Grupo.');
  } else if (updatedGrupoItem) {
  res.status(200).json(updatedGrupoItem);
  }
  } catch (error) {
  next(error);
  }
};

export const putGrupoSubDoc = async (req, res, next) => {
  try {
  const { id } = req.params;
      console.log('controller id -> ', id);
  const paGrupoSubDoc = req.body;
      console.log('controller body -> ', paGrupoSubDoc);
  const updatedGrupoSubDoc = await GruposServices.putGrupoSubDoc(id, paGrupoSubDoc );
  if (!updatedGrupoSubDoc) {
  throw boom.badRequest('No se pudo actualizar el Grupo.');
  } else if (updatedGrupoSubDoc) {
  res.status(200).json(updatedGrupoSubDoc);
  }
  } catch (error) {
  next(error);
  }
  };


export const putGrupo = async (req, res, next) => {
  try {
  const { id } = req.params;
      console.log(' : controller id -> ', id);
  const paGrupoItem = req.body;
      console.log(' : controller body -> ', paGrupoItem);
  const updatedGrupoItem = await GruposServices.putGrupoItem(id, paGrupoItem);
  if (!updatedGrupoItem) {
  throw boom.badRequest('No se pudo actualizar el Grupo.');
  } else if (updatedGrupoItem) {
  res.status(200).json(updatedGrupoItem);
  }
  } catch (error) {
  next(error);
  }
};

export const deleteGrupoItem = async (req, res, next) => {
    try {
      // : obtener parametro id mediante la
      //desestructuracion de objetos
      const { id } = req.params;
      const keyType = req.query.keyType || 'OK' ||'PK';
    const GruposItem = await GruposServices.deleteGrupoItem(id,keyType);
    if (!GruposItem) {
      throw boom.notFound('No se encontraron productos/servicios registrados.');
    } else if (GruposItem) {
      res.status(200).json(GruposItem);
    }
  }catch(error){
    next(error);
  }
};

export const deleteGrupo = async (req, res, next) => {
      try {
        // : obtener parametro id mediante la
        //desestructuracion de objetos
        const { id } = req.params;
      const GruposItem = await GruposServices.deleteGrupo(id);
      if (!GruposItem) {
        throw boom.notFound('No se encontraron productos/servicios registrados.');
      } else if (GruposItem) {
        res.status(200).json(GruposItem);
      }
    }catch(error){
      next(error);
    }
};
