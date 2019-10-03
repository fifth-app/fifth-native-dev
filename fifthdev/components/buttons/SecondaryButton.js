import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles/_secondaryButton';

export default function Primary(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.touchableOpacity}>
            <Text style={styles.text} >{props.buttonText}</Text>
        </TouchableOpacity>
    )
}
