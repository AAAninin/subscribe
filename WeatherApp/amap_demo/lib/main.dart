import 'package:flutter/material.dart';
import 'package:flutter_amap/flutter_amap.dart';
void main(){
   FlutterAmap amap = new FlutterAmap();
 
 void show(){
     amap.show(
         mapview: new AMapView(
             centerCoordinate: new LatLng(39.9242, 116.3979),
             zoomLevel: 13.0,
             mapType: MapType.night,
             showsUserLocation: true),
         title: new TitleOptions(title: "我的地图"));
     amap.onLocationUpdated.listen((Location location){
 
       print("Location changed $location") ;
 
     });
   }

  
  runApp(new MyApp());
}
class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    
    return Container(
      child: Text('123'),
    );
  }
}