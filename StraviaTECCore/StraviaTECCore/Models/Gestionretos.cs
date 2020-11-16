using System;
using System.Collections.Generic;

namespace StraviaTECCore.Models
{
    public partial class Gestionretos
    {
        public decimal RetoId { get; set; }
        public decimal? OrganizadorId { get; set; }
        public decimal? CategoriaId { get; set; }
        public string Nombre { get; set; }
        public DateTime? Periodo { get; set; }

        public Categoria Categoria { get; set; }
        public Usuarios Organizador { get; set; }
    }
}
