import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './../screens/WelcomeScreen';
import LoginScreen from './../screens/LoginScreen';
import RegisterScreen from './../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';


const LoginStack = createStackNavigator(
    {   
        Links: WelcomeScreen,
        // Links: LoginScreen,
        // Links: RegisterScreen
    },
)   
LoginStack.path = '';
export default createAppContainer(LoginStack);
