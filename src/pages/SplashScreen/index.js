import React from 'react';
import { Text, View } from 'react-native';
import { Logo } from '../../assets';

const SplashScreen = () => {
    return(
        <View style={{ backgroundColor: '#FFC700', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Logo /> 
            <Text style={{ fontSize: 32, color: '#000', marginTop: 32 }}>Food Market</Text>

        </View>
    )
};

export default SplashScreen;