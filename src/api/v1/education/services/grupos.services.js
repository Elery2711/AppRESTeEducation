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

  //FIC: GET PRODUCT OR SERVICE BY ID  Busca la info por id y lo busca por tipo de dato
export const getGruposItem = async (id, keyType) => {
    let GruposItem;
   
    try {
      if (keyType === 'OK') {
        GruposItem = await Grupos.findOne({
          IdGrupoOK: id,
        });
      } else if (keyType === 'BK') {
        GruposItem = await Grupos.findOne({
            IdGrupoBK: id,
        });
      } else if (keyType === 'PK') {
        GruposItem = await Grupos.findOne({
            IdGrupoPK: id,
        });
      } else if (keyType === 'PersonaOK') {
        GruposItem = await Grupos.findOne({
          IdPersonaOK: id,
        });
      } else if (keyType === 'PeriodoOK') {
        GruposItem = await Grupos.findOne({
          IdPeriodoOK: id,
        });
      } else if (keyType === 'InstitutoOK') {
        GruposItem = await Grupos.findOne({
          IdInstitutoOK: id,
        });
      } else if (keyType === 'CarreraOK') {
        GruposItem = await Grupos.findOne({
          IdCarreraOK: id,
        });
      } else if (keyType === 'AsignaturaOK') {
        GruposItem = await Grupos.findOne({
          IdAsignaturaOK: id,
        });
      } else if (keyType === 'Grupo') {
        GruposItem = await Grupos.findOne({
          Grupo: id,
        });
      } else if (keyType === 'Curso') {
        GruposItem = await Grupos.findOne({
          Curso: id,
        });
      } else if (keyType === 'GradoAca') {
        GruposItem = await Grupos.findOne({
          GradoAca: id,
        });
      }
      return(GruposItem);
    } catch (error) {
      throw boom.internal(error);
    }
};
  

  //Education
//FIC: POST (ADD) Grupo.
export const postGrupoItem = async (paGrupoItem) => {
      try {
          const newGrupoItem = new Grupos(paGrupoItem);
          return await Grupos.insertMany(newGrupoItem);
      } catch (error) {
        throw error;
      }
}


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
export const putGrupoSubDoc = async (id, paGrupoSubDoc) =>{
  let GrupoSubDoc

  try {
    //console.log("FIC: PUT API INSTITUTO", id);
    GrupoSubDoc = await Grupos.findOneAndUpdate({ IdGrupoOK: id }, {$set :{ paGrupoSubDoc}}, {
    new: true,
  });
  return (GrupoSubDoc)
  } catch (error) {
  throw boom.badImplementation(error);
  }
}

export const putGrupoItem = async (id, paGrupoItem,keyType) => {
  let GruposItem;
  try {
    //console.log(": PUT API Grupo", id);
    if(keyType === 'OK') {
        GruposItem = await Grupos.findOneAndUpdate({ IdGrupoOK: id }, paGrupoItem, {
          new: true,
          });
      } else if (keyType === 'BK') {
        GruposItem = await Grupos.findOneAndUpdate({ IdGrupoBK: id }, paGrupoItem, {
          new: true,
          });
      }else if (keyType === 'PK') {
        GruposItem = await Grupos.findOneAndUpdate({ IdGrupoPK: id }, paGrupoItem, {
          new: true,
          });
      }else if (keyType === 'TipoEstatusOK') {
        GruposItem = await Grupos.findOneAndUpdate({ IdGrupoOK: id }, paGrupoItem, {
          new: true,
          });
      }else if (keyType === 'grupos_estatusPOST') {
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



