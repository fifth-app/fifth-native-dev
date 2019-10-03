import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles/_welcomeScreen';
import PrimaryButton from '../components/buttons/PrimaryButton';
import SecondaryButton from '../components/buttons/SecondaryButton';

// import {GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default function WelcomeScreen(props) {
    const { push } = props.navigation;
    return (
        <View
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.fifthLogoContainer}>
                <Image source={require('../assets/images/fifth.png')}
                    resizeMode='cover'
                    style={styles.fifthLogo} />
                <PrimaryButton onPress={() => push('RegisterScreen')} buttonText="Register" />
                <SecondaryButton onPress={() => push('LoginScreen')} buttonText="Login" />
            </View>
        </View>
    );
};

