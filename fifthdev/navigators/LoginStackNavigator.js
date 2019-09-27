import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';


const LoginStackNavigator = createStackNavigator({
    Home: HomeScreen,
})
LoginStackNavigator.path = '';
export default createAppContainer(LoginStackNavigator);

