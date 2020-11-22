package com.computadores.straviatec_movil.db
import android.content.Context
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper

import com.computadores.straviatec_movil.db.StraviaTecContrato as stc;

const val DATABASE_NAME = "StraviaTec"
const val DATABASE_VERSION = 1;

class StraviaDbHelper(context: Context) :
        SQLiteOpenHelper(context, DATABASE_NAME, null, DATABASE_VERSION) {
    /**
     * Called when the database is created for the first time. This is where the
     * creation of tables and the initial population of the tables should happen.
     *
     * @param db The database.
     */
    override fun onCreate(db: SQLiteDatabase?) {
        val crearRecorrido: String =
                "CREATE TABLE ${stc.Recorrido.TABLE_NAME} (" +
                        "${stc.Recorrido.ID} INTEGER PRIMARY KEY AUTOINCREMENT," +
                        "${stc.Recorrido.NOMBRE} VARCHAR(50) NOT NULL," +
                        "${stc.Recorrido.FECHA_HORA} DATETIME NOT NULL);"

        val crearActividad: String =
                "CREATE TABLE ${stc.Actividad.TABLE_NAME} (" +
                        "${stc.Actividad.ID} INTEGER PRIMARY KEY AUTOINCREMENT," +
                        "${stc.Actividad.DURACION} DECIMAL(5,1) NOT NULL," +
                        "${stc.Actividad.KILOMETROS} DECIMAL(5,1) NOT NULL," +
                        "${stc.Actividad.ES_EVENTO} INTEGER NOT NULL DEFAULT 0," +
                        "${stc.Actividad.ID_RECORRIDO} INTEGER NOT NULL," +
                        "CONSTRAINT fk_Actividad_Recorrido " +
                        "FOREIGN KEY(${stc.Recorrido.ID}) ${stc.Referencias.ID_RECORRIDO});"

        val crearPunto: String =
                "CREATE TABLE ${stc.Punto.TABLE_NAME} (" +
                        "${stc.Punto.ID} INTEGER PRIMARY KEY AUTOINCREMENT," +
                        "${stc.Punto.SEGMENTO} INTEGER NOT NULL," +
                        "${stc.Punto.ORDEN} INTEGER NOT NULL," +
                        "${stc.Punto.LATITUD} DECIMAL(10,8) NOT NULL," +
                        "${stc.Punto.LONGITUD} DECIMAL(10,8) NOT NULL," +
                        "${stc.Punto.TIEMPO} DATETIME NOT NULL," +
                        "${stc.Punto.ELEVACION} INTEGER NOT NULL," +
                        "${stc.Punto.ID_RECORRIDO} INTEGER NOT NULL,"+
                        "CONSTRAINT fk_Punto_Recorrido " +
                        "FOREIGN KEY(${stc.Recorrido.ID}) ${stc.Referencias.ID_RECORRIDO});"

        db?.execSQL(crearActividad)
        db?.execSQL(crearRecorrido)
        db?.execSQL(crearPunto)
    }

    /**
     * Called when the database needs to be upgraded. The implementation
     * should use this method to drop tables, add tables, or do anything else it
     * needs to upgrade to the new schema version.
     *
     *
     *
     * The SQLite ALTER TABLE documentation can be found
     * [here](http://sqlite.org/lang_altertable.html). If you add new columns
     * you can use ALTER TABLE to insert them into a live table. If you rename or remove columns
     * you can use ALTER TABLE to rename the old table, then create the new table and then
     * populate the new table with the contents of the old table.
     *
     *
     * This method executes within a transaction.  If an exception is thrown, all changes
     * will automatically be rolled back.
     *
     *
     * @param db The database.
     * @param oldVersion The old database version.
     * @param newVersion The new database version.
     */
    override fun onUpgrade(db: SQLiteDatabase?, oldVersion: Int, newVersion: Int) {
        val SQL_DELETE_ACTIVIDAD = "DROP TABLE IF EXISTS ${stc.Actividad.TABLE_NAME}"
        val SQL_DELETE_PUNTO = "DROP TABLE IF EXISTS ${stc.Punto.TABLE_NAME}"
        val SQL_DELETE_RECORRIDO = "DROP TABLE IF EXISTS ${stc.Recorrido.TABLE_NAME}"
        db?.execSQL(SQL_DELETE_ACTIVIDAD)
        db?.execSQL(SQL_DELETE_PUNTO)
        db?.execSQL(SQL_DELETE_RECORRIDO)
        onCreate(db)
    }

}