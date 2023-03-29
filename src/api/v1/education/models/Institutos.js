import * as mongoose from 'mongoose';

//Education

const institutosSchema  = new mongoose.Schema({
    IdInstitutoOK : { type : String, required : false },
    IdInstitutoBK : { type : String, required : false },
    DesInstituto  : { type : String, required : false },
    Alias        : { type : String, required : false },
    Matriz        : { type : String, required : false },
    Giro          : { type : String, required : false },
    IdInstitutoSupOK  : { type : String, required : false }
});


//Education

export default mongoose.model(
    'cat_institutos',
    institutosSchema,
    'cat_institutos'
)