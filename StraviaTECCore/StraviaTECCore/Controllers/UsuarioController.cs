using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StraviaTECCore.Models;
using System.Web.Http.Cors;

namespace StraviaTECCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

 
    public class UsuarioController : ControllerBase
    {

        [HttpGet]
        public IActionResult getuser() {

            using (Straviatec_DBContext db = new Straviatec_DBContext()) {

                var list = db.Usuarios.OrderByDescending(d=>d.UsuarioId).ToList();
                return Ok(list);
            
            
            }

        }

        [HttpPost]

        public IActionResult adduser(Usuarios user) {

            using (Straviatec_DBContext db = new Straviatec_DBContext())

            {
                
                Usuarios usuario = new Usuarios();
                usuario.UsuarioId = user.UsuarioId;
                usuario.Nombre = user.Nombre;
                usuario.Apellido1 = user.Apellido1;
                usuario.Apellido2 = user.Apellido2;
                usuario.Nacionalidad = user.Nacionalidad;
                usuario.FechaNacimiento = user.FechaNacimiento;
                usuario.CuentaBancaria = user.CuentaBancaria;
                usuario.Edad = user.Edad;
                usuario.Usuario = user.Usuario;
                usuario.Contraseña = user.Contraseña;
                usuario.Rol = user.Rol;

                db.Usuarios.Add(usuario);
                db.SaveChanges();

                return Ok();


            }





        }





    }
}
