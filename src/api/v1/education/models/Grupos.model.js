import * as mongoose from 'mongoose';
//Education
const gruposSchema  = new mongoose.Schema({
    IdGrupoPK: {type : Number, required : false},
    IdGrupoOK: {type : String, required : false},
    IdGrupoBK: {type : String, required : false},
    IdPeriodoOK: {type : String, required : false},
    IdInstitutoOK: {type : String, required : false},
    IdCarreraOK: {type : String, required : false},
    IdProgramaOK: {type : String, required : false},
    IdReticulaOK: {type : String, required : false},
    IdAsignaturaOK: {type : String, required : false},
    IdPersonaOK: {type : String, required : false},
    IdRolOK: {type : String, required : false},
    Grupo: {type : String, required : false},
    Capacidad: {type : Number, required : false},
    IdTipoCursoOK: {type : String, required : false},
    IdCursoOK: {type : String, required : false},
    Curso: {type : String, required : false},
    IdTipoGradoAcaOK: {type : String, required : false},
    IdGradoAcaOK: {type : String, required : false},
    GradoAca: {type : String, required : false},
    IdTipoHorarioOK: {type : String, required : false},
    IdHorarioOK: {type : String, required : false},
    Horario: {type : String, required : false},
    grupos_estatus: [
        {
          IdTipoEstatusOK: {type : String, required : false},
          IdEstatusOK: {type : String, required : false},
          Estatus: {type : String, required : false},
          Actual: {type : String, required : false},
          detail_row: {
            Activo: {type : String, required : false},
            Borrado: {type : String, required : false},
            detail_row_reg: [
              {
                FechaReg: {type : Date, required : false,default:Date.now()},
                UsuarioReg: {type : String, required : false}
              }
            ]
          }
        }
      ],
    grupos_horarios : [
      {
         IdDiaOK :  {type : String, required : false},
         IdDiaBK : {type : String, required : false},
         Dia :  {type : String, required : false} ,
         Alias :  {type : String, required : false} ,
         HoraEntrada :  {type : String, required : false},
         HoraSalida : {type : String, required : false} ,
         ToleranciaEntrada : {type : Number, required : false},
         ToleranciaSalida :{type : Number, required : false},
         IdEdificioOK : {type : String, required : false} ,
         IdEspacioOK : {type : String, required : false},
         detail_row : {
           Activo :  {type : String, required : false} ,
           Borrado :  {type : String, required : false} ,
           detail_row_reg : [
            {
               FechaReg : {
                 $date : {
                   $numberLong :  {type : Date, required : false,default:Date.now()}
                }
              },
               UsuarioReg :  {type : String, required : false} 
            }
          ]
        }
      }
    ],
     grupos_personas : [
      {
         IdPersonaOK :  {type : String, required : false} ,
         IdRolOK :  {type : String, required : false} ,
         NumPeriodo :  {type : String, required : false} ,
         Repite :  {type : String, required : false} ,
         detail_row : {
           Activo :  {type : String, required : false} ,
           Borrado :  {type : String, required : false} ,
           detail_row_reg : [
            {
               FechaReg : {
                 $date : {
                   $numberLong :   {type : Date, required : false,default:Date.now()} 
                }
              },
               UsuarioReg :  {type : String, required : false} 
            }
          ]
        }
      }
    ],
     detail_row : {
       Activo :  {type : String, required : false}  ,
       Borrado :  {type : String, required : false}  ,
       detail_row_reg : [
        {
           FechaReg : {
             $date : {
               $numberLong :   {type : Date, required : false,default:Date.now()} 
            }
          },
           UsuarioReg : {type : String, required : false} 
        }
      ]
    }
})
export default mongoose.model(
    'grupos',
    gruposSchema,
    'grupos'
)