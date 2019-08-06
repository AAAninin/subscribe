import 'package:flutter/material.dart';
import 'package:demo/Weather.dart';

class Message extends StatelessWidget {
  final List<Weedweather> weedweather;

  Message({Key key, this.weedweather}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    var colstyle = new TextStyle(color: Colors.white, fontSize: 15.0, height: 1.2);
    
    return Container(
      child: ListView.builder(
        itemCount: 5,
        itemBuilder: (context,index){
          var column = new Column(
            children: <Widget>[
                Text(weedweather[index].day, style: colstyle),
                Text(weedweather[index].maintemperature+'~'+weedweather[index].maxtemperature, style: colstyle),
                Text(weedweather[index].weather, style: colstyle)
              ],
            );
          return column;
        },
      ),
    );
  }
}
