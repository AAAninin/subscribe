import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'welcome my phone web',
      home: Scaffold(
          appBar: new AppBar(title: new Text('List widget')),
          body: GridView(
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 3,
              mainAxisSpacing: 2.0,
              crossAxisSpacing: 2.0,
              childAspectRatio: 0.7,
            ),
            children: <Widget>[
              new Image.network('http://120.79.14.188/girlfriend1.jpg',fit: BoxFit.cover),
              new Image.network('http://120.79.14.188/girlfriend2.jpg',fit: BoxFit.cover),
              new Image.network('http://120.79.14.188/girlfriend3.jpg',fit: BoxFit.cover),
              new Image.network('http://120.79.14.188/girlfriend4.jpg',fit: BoxFit.cover),
              new Image.network('http://120.79.14.188/girlfriend5.jpg',fit: BoxFit.cover),
              new Image.network('http://120.79.14.188/girlfriend6.jpg',fit: BoxFit.cover),
              new Image.network('http://120.79.14.188/girlfriend7.jpg',fit: BoxFit.cover),
              new Image.network('http://120.79.14.188/girlfriend8.jpg',fit: BoxFit.cover),
              new Image.network('http://120.79.14.188/girlfriend9.jpg',fit: BoxFit.cover),
              
            ],
          )),
    );
  }
}


