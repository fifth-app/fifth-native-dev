import { createBottomTabNavigator } from "react-native";
import HomeStack from "./HomeStack.js";

const config = Platform.select({
    web: { headerMode: 'screen', },
    default: {},
});

const HomeStack = createStackNavigator(
{
    Home: HomeScreen,
},
config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
        focused={focused}
        name={
            Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }/>
),
};

HomeStack.path = '';

const LoginStack = createStackNavigator(
{
    Links: LoginScreen
},
config
);


const MainFlowTabNav = createBottomTabNavigator({
    HomeStack,
    LoginStack
})
MainFlowTabNav.path = '';

export default MainFlowTabNav;