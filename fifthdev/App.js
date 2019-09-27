import React, { Component } from 'react';
import MainFlowTabNav from './navigators/MainFlowTabNav.js';

export default class App extends Component {
  render() {
    return (
          // <LoginStackNavigator />
          <View>
          <MainFlowTabNav />
          </View>
    );
  }
}

{/* <ScrollView style={styles.container} content={styles.contentContainer}>
<View style={styles.container}>
  {/* <HomeScreen /> */}
// </View>
// </ScrollView> */}