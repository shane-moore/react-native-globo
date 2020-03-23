import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';
import { Hero } from '../sections/Hero.js';
import { Menu } from '../sections/Menu.js';
import { createStackNavigator } from '@react-navigation/stack';

export class Home extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <Header message="Press to Login" />
        <Hero />
        <Menu navigate={navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column-reverse',
    // alignItems: 'center'
  }
})

export default Home;
