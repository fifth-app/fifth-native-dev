import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './../screens/LoginScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginStack from './LoginStack'
// const config = Platform.select({
//     web: { headerMode: 'screen', },
//     default: {},
// });



const MainFlowTabNav = createBottomTabNavigator({
    LoginStack
})

export default createAppContainer(MainFlowTabNav);