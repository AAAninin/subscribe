package com.example.lin.finalobject;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;


public class MainActivity extends AppCompatActivity {

    private SensorManager sensorManager;
    private final SensorEventListener listener = new SensorEventListener() {
        @Override
        public void onSensorChanged(SensorEvent event) {
            Toast.makeText(MainActivity.this,
                    "当前光照强度：" + event.values[0] + "勒克斯", Toast.LENGTH_SHORT).show();
        }

        @Override
        public void onAccuracyChanged(Sensor sensor, int accuracy) {

        }
    };


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //第一步：获取 SensorManager 的实例
        sensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
        //第二步：获取 Sensor 传感器类型
        Sensor sensor = sensorManager.getDefaultSensor(Sensor.TYPE_TEMPERATURE);
        //第四步：注册 SensorEventListener
        sensorManager.registerListener(listener,sensor,SensorManager.SENSOR_DELAY_NORMAL);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        //传感器使用完毕，释放资源
        if(sensorManager!=null){
            sensorManager.unregisterListener(listener);
        }
    }
}
