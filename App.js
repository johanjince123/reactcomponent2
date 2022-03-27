import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

export default class App extends Component {
  displayAlert(){
    alert('i am an alert box')
  }
  render(){
    return(
      <View style ={{ marginTop: 200}}>
      <Button title = "click me" color= "blue" onPress={this.displayAlert}/>
      <Text> my first react Component</Text>
      </View>
    );
  }
}