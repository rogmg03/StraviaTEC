using System;
using System.Collections.Generic;

namespace StraviaTECCore.Models
{
    public partial class Gestionactividad
    {
        public decimal GestionId { get; set; }
        public string Tipo { get; set; }
        public string Clasificacion { get; set; }

        public GestionCarreras Gestion { get; set; }
    }
}
