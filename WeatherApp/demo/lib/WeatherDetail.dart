import 'package:flutter/material.dart';
import 'package:demo/Weather.dart';
import 'package:demo/Message.dart';

class WeatherDetail extends StatelessWidget {
  final Weather weathers;

  WeatherDetail({Key key, this.weathers}) : super(key: key);

//2019-4-2

  Widget _buildFutureWeather(String day, String weather, String temp) {
    return new Expanded(
      flex: 1,
      child: new Column(
        children: <Widget>[
          Padding(padding: EdgeInsets.only(top: 10.0)),
          Text(
            day,
            style: TextStyle(color: Colors.white),
          ),
          Padding(padding: EdgeInsets.only(top: 10.0)),
          Text(
            temp + "℃",
            style: TextStyle(color: Colors.white),
          ),
          Padding(padding: EdgeInsets.only(top: 10.0)),
          Text(
            weather,
            style: TextStyle(color: Colors.white),
          ),
          Padding(padding: EdgeInsets.only(top: 10.0)),
        ],
      ),
    );
  }

  List<Widget> _buildFutureweathers(List<Weedweather> weedweathers) {
    List<Widget> widgets = new List();
    if (weedweathers.length > 0) {
      // int index = 0;
      for (Weedweather weedweather in weedweathers) {
        widgets.add(_buildFutureWeather(weedweather.day, weedweather.weather,
            weedweather.maintemperature + " ~ " + weedweather.maxtemperature));
      }
    }
    return widgets;
  }

//2019-4-3
  List<Widget> _buildLivingIndexes(List<Index> indexes) {
    List<Widget> widgets = new List();
    if (indexes.length > 0) {
      for (Index index in indexes) {
        widgets.add(_buildLivingIndex(index));
      }
    }
    return widgets;
  }

  Widget _buildLivingIndex(Index index) {
    return new Container(
      color: Color(0x3399CCFF),
      margin: EdgeInsets.only(top: 10.0),
      padding:
          EdgeInsets.only(left: 15.0, right: 15.0, top: 10.0, bottom: 10.0),
      child: Row(
        children: <Widget>[
          Image.asset("images/" + index.abbreviation + ".png",
              width: 40.0, fit: BoxFit.fitWidth),
          Padding(padding: EdgeInsets.only(right: 10.0)),
          Column(
            children: <Widget>[
              Container(
                child: Text(index.name + " " + index.level,
                    style: TextStyle(color: Colors.white)),
                width: 280.0,
              ),
              Padding(padding: EdgeInsets.only(top: 10.0)),
              Container(
                child: Text(index.content,
                    style: TextStyle(color: Colors.white, fontSize: 12.0)),
                width: 280.0,
              ),
            ],
          ),
        ],
      ),
    );
  }

///////////////////////////////////////////////////////
/////测试用例
  List<Weedweather> someweedweather = new List<Weedweather>.generate(
      5,
      (index) =>
          Weedweather('day$index', 'max$index', 'main$index', 'weather$index'));
  List<Index> indexe = new List<Index>.generate(
      6, (i) => Index('abb$i', 'content$i', 'level$i', 'name$i'));
      //
  @override
  Widget build(BuildContext context) {
    var mainstack = new Stack(
      alignment: new FractionalOffset(0.5, 0.2),
      children: <Widget>[
        Container(
          child: Image.asset('assest/flag.png', fit: BoxFit.fill),
          width: double.infinity,
          height: double.infinity,
        ),
        SingleChildScrollView(
          scrollDirection: Axis.vertical,
          child: Container(
            padding: EdgeInsets.only(top: 30.0),
            decoration: BoxDecoration(
              color: Color(0x66000000),
            ),
            child: Column(
              children: <Widget>[
                Text(
                  weathers.where,
                  style: textstyle,
                ),
                Padding(
                  padding: EdgeInsets.only(top: 10.0),
                ),
                Text(
                  weathers.time,
                  style: textstyle,
                ),
                Padding(
                  padding: EdgeInsets.only(top: 30.0),
                ),
                Text(
                  weathers.temperature,
                  style: TextStyle(color: Colors.white, fontSize: 50.0),
                ),
                Padding(
                  padding: EdgeInsets.only(top: 30.0),
                ),
                Text(
                  '多云',
                  style: textstyle,
                ),
                Padding(
                  padding: EdgeInsets.only(top: 20.0),
                ),
                Text(
                  '东北风 2级',
                  style: textstyle,
                ),
                Padding(
                  padding: EdgeInsets.only(top: 40.0),
                ),
                Container(
                  child: Stack(
                    children: <Widget>[
                      Container(
                        height: 100.0,
                        width: double.infinity,
                        color: Color(0x33000000),
                      ),
                      Container(
                        child: new Row(
                          children: _buildFutureweathers(someweedweather),
                        ),
                        padding: EdgeInsets.fromLTRB(10.0, 7.0, 10.0, 0),
                      )
                    ],
                  ),
                ),
                Padding(
                  padding: EdgeInsets.only(top: 10.0),
                ),
                Container(
                  child: Column(
                    children: _buildLivingIndexes(indexe),
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );

    return Scaffold(
      body: mainstack,
    );
  }
}

var textstyle = new TextStyle(color: Colors.white, fontSize: 20.0);
