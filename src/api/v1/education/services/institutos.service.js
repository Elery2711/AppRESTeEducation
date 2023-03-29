import Institutos from "../models/Institutos";
import boom from '@hapi/boom';

export const getInstitutosList = async () => {
    let InstitutosList;
    try {
      InstitutosList = await Institutos.find();
          return(InstitutosList);
    } catch (error) {
      //res.status(500).json({ message: 'Error: ' + ficError });
      throw boom.internal(error);
    }
};

  //FIC: GET PRODUCT OR SERVICE BY ID  Busca la info por id y lo busca por tipo de dato
export const getInstitutosItem = async (id, keyType) => {
    let InstitutosItem;
   
    try {
      if (keyType === 'OK') {
        InstitutosItem = await Institutos.findOne({
          IdInstitutoOK: id,
        });
      } else if (keyType === 'BK') {
        InstitutosItem = await Institutos.findOne({
            IdInstitutoBK: id,
        });
      }
      return(InstitutosItem);
    } catch (error) {
      throw boom.internal(error);
    }
};
  
  //Education
//FIC: POST (ADD) Instituto.
export const postInstitutoItem = async (paInstitutoItem) => {
      try {
          const newInstitutoItem = new Institutos(paInstitutoItem);
          return await Institutos.insertMany(newInstitutoItem);
      } catch (error) {
        throw error;
      }
}

//FIC: SERVICES PUT
// PUT (MODIFY) INSTITUTOS
export const putInstitutoItem = async (id, paInstitutoItem) => {
  try {
      //console.log("FIC: PUT API INSTITUTO", id);
  return await Institutos.findOneAndUpdate({ IdInstitutoOK: id }, paInstitutoItem, {
  new: true,
  });
  } catch (error) {
  throw boom.badImplementation(error);
  }
};






export const deleteInstitutoItem = async (id) => {
    let InstitutosItem;
    try {
        //console.log("FIC: PUT API INSTITUTO", id);
        InstitutosItem = await Institutos.deleteOne({
          IdInstitutoOK: id,
        });
        return(InstitutosItem);
    } catch (error) {
      throw boom.internal(error);
    }
};
