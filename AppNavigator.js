import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/views/Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
});

export default AppNavigator;
