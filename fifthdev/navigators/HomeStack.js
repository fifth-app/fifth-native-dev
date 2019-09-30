// import 'ballet';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen
    }
)

// HomeStack.navigationOptions = {
//     tabBarLabel: 'Home',
//     tabBarIcon: ({ focused }) => (
//       <TabBarIcon
//         focused={focused}
//         name={
//           // Platform.OS === 'ios'
//           //   ? `ios-information-circle${focused ? '' : '-outline'}`
//           //   : 'md-information-circle'
//         }/>
//     ),
//   };

export default createAppContainer(HomeStack);