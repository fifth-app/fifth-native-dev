import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from '../styles/Styles';

export default function LoginScreen(props) {
    const { navigate } = props.navigation;

    return(
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainerStyle}>
                    <Image source={require('../assets/images/fifth.png')}
                            resizeMode='cover'
                            style={styles.welcomeImage}/>
                    <Text> Test Text LOGIN </Text>
            </ScrollView>
        </View>
    )
};

