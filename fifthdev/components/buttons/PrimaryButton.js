import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function Primary(props) {
    return (
        <TouchableOpacity>
            <Text>{props.buttonText}</Text>
        </TouchableOpacity>
    )
}
