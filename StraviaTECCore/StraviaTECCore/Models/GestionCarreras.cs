using System;
using System.Collections.Generic;

namespace StraviaTECCore.Models
{
    public partial class GestionCarreras
    {
        public decimal CarreraId { get; set; }
        public decimal? OrganizadorId { get; set; }
        public double? Costo { get; set; }
        public DateTime? FechaCarrera { get; set; }
        public string Nombre { get; set; }
        public DateTime? InicioRecorrido { get; set; }
        public DateTime? FinRecorrido { get; set; }
        public decimal? CategoriaId { get; set; }

        public Categoria Categoria { get; set; }
        public Usuarios Organizador { get; set; }
        public Gestionactividad Gestionactividad { get; set; }
    }
}
