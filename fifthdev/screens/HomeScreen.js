import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from '../styles/Styles';

export default function HomeScreen(props) {
    // const { navigate } = props.navigation;
    return(
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.container}>
                    <Image source={require('../assets/images/fifth.png')}
                            resizeMode='cover'
                            style={styles.welcomeImage}/>
                    <Text> Test Text </Text>            
        </View>
    </ScrollView> 
    );
};

