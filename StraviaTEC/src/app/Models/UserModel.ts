import DateTimeFormat = Intl.DateTimeFormat;

export interface User{
  usuarioId: number ;
  nombre:string,
   apellido1:string,
   apellido2:string,
   nacionalidad:string,
   fechaNacimiento:Date,
   cuentaBancaria: string,
   edad: number,
   usuario: string,
   pass: string,
   rol: string
}
