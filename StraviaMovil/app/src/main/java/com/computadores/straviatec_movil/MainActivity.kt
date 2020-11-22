package com.computadores.straviatec_movil

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.computadores.straviatec_movil.db.StraviaDbHelper

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val dbHelper = StraviaDbHelper(this); // INSTANCIA DE BD;
//        dbHelper.writableDatabase;
    }
}