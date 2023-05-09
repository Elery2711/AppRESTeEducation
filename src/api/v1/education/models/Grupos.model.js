import * as mongoose from 'mongoose';
//Education
const gruposSchema  = new mongoose.Schema({
    IdGrupoOK: {type : String},
    IdGrupoBK: {type : String},
    IdPeriodoOK: {type : String},
    IdInstitutoOK: {type : String},
    IdCarreraOK: {type : String},
    IdProgramaOK: {type : String},
    IdReticulaOK: {type : String},
    IdAsignaturaOK: {type : String},
    IdPersonaOK: {type : String},
    IdRolOK: {type : String},
    Grupo: {type : String},
    Capacidad: {type : Number},
    IdTipoCursoOK: {type : String},
    IdTipoGradoAcaOK: {type : String},
    IdTipoHorarioOK: {type : String},
    grupos_estatus: [
        {
          _id:false,
          IdTipoEstatusOK: {type : String},
          Actual: {type : String},
          detail_row: {
            _id:false,
            Activo: {type : String},
            Borrado: {type : String},
            detail_row_reg: [
              {
                _id:false,
                FechaReg: {type : Date,default:Date.now()},
                UsuarioReg: {type : String}
              }
            ]
          }
        }
      ],
    grupos_horarios : [
      {
         _id:false,
         IdDiaOK :  {type : String},
         IdDiaBK : {type : String},
         Dia :  {type : String} ,
         Alias :  {type : String} ,
         HoraEntrada :  {type : String},
         HoraSalida : {type : String} ,
         ToleranciaEntrada : {type : Number},
         ToleranciaSalida :{type : Number},
         IdEdificioOK : {type : String} ,
         IdEspacioOK : {type : String},
         detail_row : {
           _id:false,
           Activo :  {type : String} ,
           Borrado :  {type : String} ,
           detail_row_reg : [
            {
               _id:false,
               FechaReg : {
                 _id:false,
                 $date : {
                   _id:false,
                   $numberLong :  {type : Date,default:Date.now()}
                }
               },
               UsuarioReg :  {type : String} 
            }
          ]
        }
      }
    ],
     grupos_personas : [
      {
         _id:false,
         IdPersonaOK :  {type : String} ,
         IdRolOK :  {type : String} ,
         NumPeriodo :  {type : String} ,
         Repite :  {type : String} ,
         detail_row : {
           _id:false,
           Activo :  {type : String} ,
           Borrado :  {type : String} ,
           detail_row_reg : [
            {
               _id:false,
               FechaReg : {
                 _id:false,
                 $date : {
                   _id:false,
                   $numberLong :   {type : Date,default:Date.now()} 
                }
              },
               UsuarioReg :  {type : String} 
            }
          ]
        }
      }
    ],
     detail_row : {
       _id:false,
       Activo :  {type : String}  ,
       Borrado :  {type : String}  ,
       detail_row_reg : [
        {
           _id:false,
           FechaReg : {
             _id:false,
             $date : {
               _id:false,
               $numberLong :   {type : Date,default:Date.now()} 
            }
          },
           UsuarioReg : {type : String} 
        }
      ]
    }
})
export default mongoose.model(
    'grupos',
    gruposSchema,
    'grupos'
)