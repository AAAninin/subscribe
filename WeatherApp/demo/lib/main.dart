import 'package:flutter/material.dart';
import 'package:demo/Weather.dart';
import 'package:demo/WeatherList.dart';
// import 'package:'

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // getHttp();
    return MaterialApp(
      title: 'ListView widget',
      home: WeatherList(
          weather: List.generate(
              10, (i) => Weather('where$i', 'time$i', 'temperature$i'))),
    );
  }
}
