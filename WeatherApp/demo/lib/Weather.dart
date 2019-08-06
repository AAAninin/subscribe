class Weather {
  final String where;
  final String time;
  final String temperature;
  Weather(this.where,this.time,this.temperature);
}

class Weedweather{
  final String day;
  final String maxtemperature;
  final String maintemperature;
  final String weather;
  Weedweather(this.day,this.maintemperature,this.maxtemperature,this.weather);
}

class Index{
  final String abbreviation;
  final String content;
  final String level;
  final String name;
  Index(this.abbreviation,this.content,this.level,this.name);
}