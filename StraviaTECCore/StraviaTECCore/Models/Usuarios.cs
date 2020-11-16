using System;
using System.Collections.Generic;

namespace StraviaTECCore.Models
{
    public partial class Usuarios
    {
        public Usuarios()
        {
            GestionCarreras = new HashSet<GestionCarreras>();
            Gestionretos = new HashSet<Gestionretos>();
        }

        public decimal UsuarioId { get; set; }
        public string Nombre { get; set; }
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
        public string Nacionalidad { get; set; }
        public DateTime? FechaNacimiento { get; set; }
        public string CuentaBancaria { get; set; }
        public int? Edad { get; set; }
        public string Usuario { get; set; }
        public string Contraseña { get; set; }
        public string Rol { get; set; }
        public byte[] Foto { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public ICollection<GestionCarreras> GestionCarreras { get; set; }
        public ICollection<Gestionretos> Gestionretos { get; set; }
    }
}
