import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Colors } from '../../assets/Colors';

const LoadingComponent = ({ backgroundColor = Colors.BLACK_30, msg = '' }) => {
    return (
        <TouchableOpacity activeOpacity={1} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor, top: 0, bottom: 0, left: 0, right: 0, elevation: 6, shadowColor: Colors.TRANSPARENT }}>
            <ActivityIndicator size="large" color={Colors.primarycolor} />
            <Text allowFontScaling={false}>{msg}</Text>
        </TouchableOpacity>
    )
}

export default LoadingComponent;
