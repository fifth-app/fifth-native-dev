import React from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/Styles';
// import {GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default function WelcomeScreen(props) {
    // const { navigate } = props.navigation;
    return(
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.container}>
                    <Image source={require('../assets/images/fifth.png')}
                            resizeMode='cover'
                            style={styles.welcomeImage}/>
                    <TouchableOpacity><Text>Register</Text></TouchableOpacity>     
                    <Text> Already have an account? Login</Text>         
        </View>
    </ScrollView> 
    );
};

