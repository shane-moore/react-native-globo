import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from '../sections/Header.js';

export class Contact extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={StyleSheet.container}>
        <Header message='Press To Login' />
        <Text style={{ flex: 8 }}>The Contact form will go here</Text>
        <Text style={{ flex: 6 }}>More Contact form will go here</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

