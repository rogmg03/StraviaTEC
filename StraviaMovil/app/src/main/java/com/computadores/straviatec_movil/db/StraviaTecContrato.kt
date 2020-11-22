package com.computadores.straviatec_movil.db

/**
 * Clase que establece los nombres a usar en la base de datos
 */
object StraviaTecContrato {

    interface ColumnasActividad {
        val TABLE_NAME: String
        var ID: String
        var FECHA: String
        var KILOMETROS: String
        var DURACION: String
        var ES_EVENTO: String
        var ID_RECORRIDO: String
    }

    interface ColumnasRecorrido {
        val TABLE_NAME: String
        var ID: String
        var NOMBRE: String
        var FECHA_HORA: String
    }

    interface ColumnasPunto {
        val TABLE_NAME: String
        var ID:String
        var ID_RECORRIDO: String
        var SEGMENTO: String
        var ORDEN: String
        var LATITUD: String
        var LONGITUD: String
        var TIEMPO: String
        var ELEVACION: String
    }

    interface ReferenciasI {
        var ID_RECORRIDO: String;
    }

    object Actividad : ColumnasActividad {
        override val TABLE_NAME: String = "ACTIVIDAD"
        override var ID: String = "Id_Actividad"
        override var FECHA: String = "Fecha"
        override var ID_RECORRIDO: String = "Id_recorrido"
        override var DURACION: String = "Duracion"
        override var KILOMETROS: String = "Kilometros"
        override var ES_EVENTO: String = "Es_evento"
    }

    object Recorrido : ColumnasRecorrido {
        override val TABLE_NAME: String = "RECORRIDO"
        override var ID: String = "Id_Recorrido"
        override var NOMBRE: String = "Nombre"
        override var FECHA_HORA: String = "Fecha_hora"
    }

    object Punto : ColumnasPunto {
        override val TABLE_NAME: String = "PUNTO"
        override var ID: String = "Id_Punto"
        override var ID_RECORRIDO: String = "Id_recorrido"
        override var SEGMENTO: String = "Segmento"
        override var ORDEN: String = "Orden"
        override var LATITUD: String = "Latitud"
        override var LONGITUD: String = "Longitud"
        override var TIEMPO: String = "Tiempo"
        override var ELEVACION: String = "Elevacion"
    }

    object Referencias : ReferenciasI {
        override var ID_RECORRIDO: String = "REFERENCES ${Recorrido.TABLE_NAME}(${Recorrido.ID})"
    }
}