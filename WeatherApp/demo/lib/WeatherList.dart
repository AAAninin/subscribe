import 'package:demo/Weather.dart';
import 'package:flutter/material.dart';
import 'package:demo/WeatherDetail.dart';

class WeatherList extends StatelessWidget {
  final List<Weather> weather;

  WeatherList({Key key, @required this.weather}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // var stack = new
    return Scaffold(
      body: ListView.builder(
        itemCount: weather.length,
        itemBuilder: (context, index) {
          return new GestureDetector(
              onTap: () => {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) =>
                              new WeatherDetail(weathers: weather[index]),
                        ))
                  },
              child: Stack(
                children: <Widget>[
                  new Container(
                    // alignment: Alignment.centerRight,
                    child: Image.asset('assest/cloud.jpg', fit: BoxFit.fill),
                    width: double.infinity,
                    height: 100.0,
                  ),
                  new Positioned(
                    top: 10.0,
                    left: 10.0,
                    child: new Text(weather[index].time,
                        style: new TextStyle(fontSize: 25.0)),
                  ),
                  new Positioned(
                    top: 40.0,
                    left: 10.0,
                    child: new Text(
                      weather[index].where,
                      style: new TextStyle(
                          fontSize: 35.0, fontWeight: FontWeight.w600),
                    ),
                  ),
                  new Positioned(
                    top: 35.0,
                    right: 10.0,
                    child: new Text(
                      weather[index].temperature,
                      style: new TextStyle(fontSize: 30.0),
                    ),
                  ),
                  //放一个添加按钮
                  new RaisedButton(
                    onPressed: (){
                      //跳转到添加页面
                    },
                    child: Icon(Icons.add),
                  ),
                ],
              ));
        },
      ),
    );
  }
}
