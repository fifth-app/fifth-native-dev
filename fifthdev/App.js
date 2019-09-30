import React, { Component } from 'react';
import { View } from 'react-native';
import MainFlowTabNav from './navigators/MainFlowTabNav.js';
import LoginStack from './navigators/LoginStack';

export default class App extends Component {
  render() {
    return true ? <LoginStack /> : <MainFlowTabNav />
  }
}

{/* <ScrollView style={styles.container} content={styles.contentContainer}>
<View style={styles.container}>
  {/* <HomeScreen /> */}
// </View>
// </ScrollView> */}