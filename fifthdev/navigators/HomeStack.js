// import 'ballet';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen
    },
    config
)

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

export default HomeStack;