import Grupos from "../models/Grupos.model";
import boom from '@hapi/boom';

export const getGruposList = async () => {
    let GruposList;
    try {
      GruposList = await Grupos.find();
          return(GruposList);
    } catch (error) {
      //res.status(500).json({ message: 'Error: ' + ficError });
      throw boom.internal(error);
    }
};

export const getGruposItemOK = async (id) => {
  let GruposItem
  try{
  GruposItem = await Grupos.findOne({
    IdGrupoOK: id,});
    return(GruposItem);
  } catch (error) {
    throw boom.internal(error);
  }
}

export const getGruposItemBK = async (id) => {
  let GruposItem
  try{
  GruposItem = await Grupos.findOne({
    IdGrupoBK: id,});
    return(GruposItem);
  } catch (error) {
    throw boom.internal(error);
  }
}

export const getGruposItemPK = async (id) => {
  let GruposItem
  try{
  GruposItem = await Grupos.findOne({
    IdGrupoPK: id,});
    return(GruposItem);
  } catch (error) {
    throw boom.internal(error);
  }
}

export const getGruposItemPersonaOK = async (id) => {
  let GruposItem
  try{
  GruposItem = await Grupos.findOne({
    IdPersonaOK: id,});
    return(GruposItem);
  } catch (error) {
    throw boom.internal(error);
  }
}

export const getGruposItemPeriodoOK = async (id) => {
  let GruposItem
  try{
  GruposItem = await Grupos.findOne({
    IdPeriodoOK: id,});
    return(GruposItem);
  } catch (error) {
    throw boom.internal(error);
  }
}

export const getGruposItemInstitutoOK = async (id) => {
  let GruposItem
  try{
  GruposItem = await Grupos.findOne({
    InstitutoOK: id,});
    return(GruposItem);
  } catch (error) {
    throw boom.internal(error);
  }
}

export const getGruposItemCarreraOK = async (id) => {
  let GruposItem
  try{
  GruposItem = await Grupos.findOne({
    IdCarreraOK: id,});
    return(GruposItem);
  } catch (error) {
    throw boom.internal(error);
  }
}

export const getGruposItemAsignaturaOK = async (id) => {
  let GruposItem
  try{
  GruposItem = await Grupos.findOne({
    IdAsignaturaOK: id,});
    return(GruposItem);
  } catch (error) {
    throw boom.internal(error);
  }
}

export const getGruposItemGrupo = async (id) => {
  let GruposItem
  try{
  GruposItem = await Grupos.findOne({
    Grupo: id,});
    return(GruposItem);
  } catch (error) {
    throw boom.internal(error);
  }
}

export const getGruposItemCurso = async (id) => {
  let GruposItem
  try{
  GruposItem = await Grupos.findOne({
    Curso: id,});
    return(GruposItem);
  } catch (error) {
    throw boom.internal(error);
  }
}

export const getGruposItemGradoAca = async (id) => {
  let GruposItem
  try{
  GruposItem = await Grupos.findOne({
    GradoAca: id,});
    return(GruposItem);
  } catch (error) {
    throw boom.internal(error);
  }
}  

  //Education
//FIC: POST (ADD) Grupo.
export const postGrupoItem = async (paGrupoItem) => {
      try {
          const newGrupoItem = new Grupos(paGrupoItem);
          return await Grupos.insertMany(newGrupoItem);
      } catch (error) {
        throw error;
      }
};

export const postGruposEstatus = async (paGrupoItem, id) => {
  let GruposItem
  try {
    GruposItem = await Grupos.findOneAndUpdate({ IdGrupoOK: id }, 
      {$push:{"grupos_estatus": [paGrupoItem]}});
    return(GruposItem);
  } catch (error) {
    throw boom.badImplementation(error);
    }
};

export const putGrupoItem = async (id, paGrupoItem,keyType) => {
  let GruposItem;
  try {
    //console.log(": PUT API Grupo", id);
      if (keyType === 'grupos_estatusPOST') {
        GruposItem = await Grupos.findOneAndUpdate({ IdGrupoOK: id }, 
          {$push:{"grupos_estatus": paGrupoItem}},
          {new: true});
      }else if (keyType === 'grupos_horariosPOST') {
        GruposItem = await Grupos.findOneAndUpdate({ IdGrupoOK: id }, 
          {$push:{"grupos_horarios": paGrupoItem}},
          {new: true});
      }else if (keyType === 'grupos_personasPOST') {
        GruposItem = await Grupos.findOneAndUpdate({ IdGrupoOK: id }, 
          {$push:{"grupos_personas": paGrupoItem}},
          {new: true});
      }else if (keyType === 'detail_rowPOST') {
        GruposItem = await Grupos.findOneAndUpdate({ IdGrupoOK: id }, 
          {$push:{"detail_row": paGrupoItem}},
          {new: true});
      }
  return(GruposItem);
  } catch (error) {
  throw boom.badImplementation(error);
  }
};

//: SERVICES PUT
// PUT (MODIFY) Grupos
export const putGrupo = async (id, paGrupoItem) => {
  let GruposItem;
  try {
    //console.log(": PUT API Grupo", id);
        GruposItem = await Grupos.findOneAndUpdate({ IdGrupoOK: id }, paGrupoItem, {
          new: true,
          });
  return(GruposItem);
  } catch (error) {
  throw boom.badImplementation(error);
  }
};

//: SERVICES PUT
// PUT (MODIFY) Grupos
//---------------------API's PUT-----------------------

export const putGrupoItemOK = async (id, paGrupoItem) => {
  let GruposItem;
  try {
    GruposItem = await Grupos.findOneAndUpdate({ IdGrupoOK: id }, paGrupoItem, {
      new: true,
      });
    return(GruposItem);
  } catch (error) {
    throw boom.badImplementation(error);
    }
};

export const putGrupoItemBK = async (id, paGrupoItem) => {
  let GruposItem;
  try {
    GruposItem = await Grupos.findOneAndUpdate({ IdGrupoBK: id }, paGrupoItem, {
      new: true,
      });
    return(GruposItem);
  } catch (error) {
    throw boom.badImplementation(error);
    }
};

export const putGrupoItemPK = async (id, paGrupoItem) => {
  let GruposItem;
  try {
    GruposItem = await Grupos.findOneAndUpdate({ IdGrupoPK: id }, paGrupoItem, {
      new: true,
      });
    return(GruposItem);
  } catch (error) {
    throw boom.badImplementation(error);
    }
};

export const putTipoEstatusOK = async (id, paGrupoItem) => {
  let GruposItem;
  try {
    GruposItem = await Grupos.findOneAndUpdate({ "grupos_estatus.IdTipoEstatusOK": id }, 
    {$set: paGrupoItem}, {
      new: true,
      });
    return(GruposItem);
  } catch (error) {
    throw boom.badImplementation(error);
    }
};

export const putEstatus = async (id, paGrupoItem) => {
  let GruposItem;
  try {
    GruposItem = await Grupos.findOneAndUpdate({ "grupos_estatus.IdTipoEstatusOK": id }, 
    {$set: paGrupoItem}, {
      new: true,
      });
    return(GruposItem);
  } catch (error) {
    throw boom.badImplementation(error);
    }
};

export const deleteGrupo = async (id) => {
  let GruposItem;
  try {
      //console.log("FIC: PUT API Grupo", id);
        GruposItem = await Grupos.deleteOne({
          IdGrupoOK: id,
        });
      return(GruposItem);
  } catch (error) {
    throw boom.internal(error);
  }
};


export const deleteGrupoItem = async (id,keyType) => {
    let GruposItem;
    try {
        //console.log("FIC: PUT API Grupo", id);
        if(keyType === 'OK') {
          GruposItem = await Grupos.deleteOne({
            IdGrupoOK: id,
          });
        } else if (keyType === 'BK') {
          GruposItem = await Grupos.deleteOne({
            IdGrupoBK: id,
          });
        }else if (keyType === 'PK') {
          GruposItem = await Grupos.deleteOne({
            IdGrupoPK: id,
          });
        }
        return(GruposItem);
    } catch (error) {
      throw boom.internal(error);
    }
};



