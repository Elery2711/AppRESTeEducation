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

  export const getGruposItemBK = async (req, res, next) => {
    try {
      const { id } = req.params;
    const GruposItem = await GruposServices.getGruposItemBK(id);
    if (!GruposItem) {
      throw boom.notFound('No se encontraron grupos registrados.');
    } else if (GruposItem) {
      res.status(200).json(GruposItem);
    }
  }catch(error){
    next(error);
  }
  };

  export const getGruposItemPK = async (req, res, next) => {
    try {
      const { id } = req.params;
    const GruposItem = await GruposServices.getGruposItemPK(id);
    if (!GruposItem) {
      throw boom.notFound('No se encontraron grupos registrados.');
    } else if (GruposItem) {
      res.status(200).json(GruposItem);
    }
  }catch(error){
    next(error);
  }
  };

  export const getGruposItemPersonaOK = async (req, res, next) => {
    try {
      const { id } = req.params;
    const GruposItem = await GruposServices.getGruposItemPersonaOK(id);
    if (!GruposItem) {
      throw boom.notFound('No se encontraron grupos registrados.');
    } else if (GruposItem) {
      res.status(200).json(GruposItem);
    }
  }catch(error){
    next(error);
  }
  };

  export const getGruposItemPeriodoOK = async (req, res, next) => {
    try {
      const { id } = req.params;
    const GruposItem = await GruposServices.getGruposItemPeriodoOK(id);
    if (!GruposItem) {
      throw boom.notFound('No se encontraron grupos registrados.');
    } else if (GruposItem) {
      res.status(200).json(GruposItem);
    }
  }catch(error){
    next(error);
  }
  };

  export const getGruposItemInstitutoOK= async (req, res, next) => {
    try {
      const { id } = req.params;
    const GruposItem = await GruposServices.getGruposItemInstitutoOK(id);
    if (!GruposItem) {
      throw boom.notFound('No se encontraron grupos registrados.');
    } else if (GruposItem) {
      res.status(200).json(GruposItem);
    }
  }catch(error){
    next(error);
  }
  };

  export const getGruposItemCarreraOK= async (req, res, next) => {
    try {
      const { id } = req.params;
    const GruposItem = await GruposServices.getGruposItemCarreraOK(id);
    if (!GruposItem) {
      throw boom.notFound('No se encontraron grupos registrados.');
    } else if (GruposItem) {
      res.status(200).json(GruposItem);
    }
  }catch(error){
    next(error);
  }
  };

  export const getGruposItemAsignaturaOK = async (req, res, next) => {
    try {
      const { id } = req.params;
    const GruposItem = await GruposServices.getGruposItemAsignaturaOK(id);
    if (!GruposItem) {
      throw boom.notFound('No se encontraron grupos registrados.');
    } else if (GruposItem) {
      res.status(200).json(GruposItem);
    }
  }catch(error){
    next(error);
  }
  };

  export const getGruposItemGrupo = async (req, res, next) => {
    try {
      const { id } = req.params;
    const GruposItem = await GruposServices.getGruposItemGrupo(id);
    if (!GruposItem) {
      throw boom.notFound('No se encontraron grupos registrados.');
    } else if (GruposItem) {
      res.status(200).json(GruposItem);
    }
  }catch(error){
    next(error);
  }
  };

  export const getGruposItemCurso = async (req, res, next) => {
    try {
      const { id } = req.params;
    const GruposItem = await GruposServices.getGruposItemCurso(id);
    if (!GruposItem) {
      throw boom.notFound('No se encontraron grupos registrados.');
    } else if (GruposItem) {
      res.status(200).json(GruposItem);
    }
  }catch(error){
    next(error);
  }
  };

  export const getGruposItemGradoAca = async (req, res, next) => {
    try {
      const { id } = req.params;
    const GruposItem = await GruposServices.getGruposItemGradoAca(id);
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

//------------------PUT----------------
export const putGrupoItemOK = async (req, res, next) => {
  try {
  const { id } = req.params;
      console.log(' : controller id -> ', id);
  const paGrupoItem = req.body;
      console.log(' : controller body -> ', paGrupoItem);
  const updatedGrupoItem = await GruposServices.putGrupoItemOK(id, paGrupoItem);
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

export const postGruposEstatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paGrupoItem = req.body;
    const newGrupoItem = await GruposServices.postGruposEstatus(paGrupoItem, id);
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

export const postGruposHorario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paGrupoItem = req.body;
    const newGrupoItem = await GruposServices.postGruposHorario(paGrupoItem, id);
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

export const postGruposPersonas = async (req, res, next) => {
  try {
    const { id } = req.params;
    const paGrupoItem = req.body;
    const newGrupoItem = await GruposServices.postGruposPersonas(paGrupoItem, id);
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

export const setGruposEstatus = async (req, res, next) => {
  try {
    const { id1,id2 } = req.params;
      console.log(' : controller id -> ', id1);
      console.log(' : controller id -> ', id2);
  const paGrupoItem = req.body;
      console.log(' : controller body -> ', paGrupoItem);
  const updatedGrupoItem = await GruposServices.setGruposEstatus(paGrupoItem, id1,id2);
  if (!updatedGrupoItem) {
  throw boom.badRequest('No se pudo actualizar el Grupo.');
  } else if (updatedGrupoItem) {
  res.status(200).json(updatedGrupoItem);
  }
  } catch (error) {
  next(error);
  }
};

export const setGruposHorario = async (req, res, next) => {
  try {
    const { id1,id2 } = req.params;
      console.log(' : controller id -> ', id1);
      console.log(' : controller id -> ', id2);
  const paGrupoItem = req.body;
      console.log(' : controller body -> ', paGrupoItem);
  const updatedGrupoItem = await GruposServices.setGruposHorario(paGrupoItem, id1,id2);
  if (!updatedGrupoItem) {
  throw boom.badRequest('No se pudo actualizar el Grupo.');
  } else if (updatedGrupoItem) {
  res.status(200).json(updatedGrupoItem);
  }
  } catch (error) {
  next(error);
  }
};

export const setGruposPersonas = async (req, res, next) => {
  try {
    const { id1,id2 } = req.params;
      console.log(' : controller id -> ', id1);
      console.log(' : controller id -> ', id2);
  const paGrupoItem = req.body;
      console.log(' : controller body -> ', paGrupoItem);
  const updatedGrupoItem = await GruposServices.setGruposPersonas(paGrupoItem, id1,id2);
  if (!updatedGrupoItem) {
  throw boom.badRequest('No se pudo actualizar el Grupo.');
  } else if (updatedGrupoItem) {
  res.status(200).json(updatedGrupoItem);
  }
  } catch (error) {
  next(error);
  }
};

export const pullGruposEstatus = async (req, res, next) => {
  try {
    const { id1,id2 } = req.params;
      console.log(' : controller id -> ', id1);
      console.log(' : controller id -> ', id2);
  const paGrupoItem = req.body;
      console.log(' : controller body -> ', paGrupoItem);
  const updatedGrupoItem = await GruposServices.pullGruposEstatus(paGrupoItem, id1,id2);
  if (!updatedGrupoItem) {
  throw boom.badRequest('No se pudo actualizar el Grupo.');
  } else if (updatedGrupoItem) {
  res.status(200).json(updatedGrupoItem);
  }
  } catch (error) {
  next(error);
  }
};

export const pullGruposHorario = async (req, res, next) => {
  try {
    const { id1,id2 } = req.params;
      console.log(' : controller id -> ', id1);
      console.log(' : controller id -> ', id2);
  const paGrupoItem = req.body;
      console.log(' : controller body -> ', paGrupoItem);
  const updatedGrupoItem = await GruposServices.pullGruposHorario(paGrupoItem, id1,id2);
  if (!updatedGrupoItem) {
  throw boom.badRequest('No se pudo actualizar el Grupo.');
  } else if (updatedGrupoItem) {
  res.status(200).json(updatedGrupoItem);
  }
  } catch (error) {
  next(error);
  }
};

export const pullGruposPersonas = async (req, res, next) => {
  try {
    const { id1,id2 } = req.params;
      console.log(' : controller id -> ', id1);
      console.log(' : controller id -> ', id2);
  const paGrupoItem = req.body;
      console.log(' : controller body -> ', paGrupoItem);
  const updatedGrupoItem = await GruposServices.pullGruposPersonas(paGrupoItem, id1,id2);
  if (!updatedGrupoItem) {
  throw boom.badRequest('No se pudo actualizar el Grupo.');
  } else if (updatedGrupoItem) {
  res.status(200).json(updatedGrupoItem);
  }
  } catch (error) {
  next(error);
  }
};