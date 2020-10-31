import 'package:flutter/material.dart';

void main() {
  runApp(PinItUp());
}

class PinItUp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: Scaffold(
        backgroundColor: Color.bluegrey,
        appBar: AppBar(
          title: Text('PinItUp'),
        ),
      )
    );
  }
}