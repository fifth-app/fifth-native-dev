import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';


const LoginStack = createStackNavigator(
    {
        Links: LoginScreen
    },
)   
LoginStack.path = '';
export default createAppContainer(LoginStack);

