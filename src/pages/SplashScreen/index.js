import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Logo } from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn')
        }, 2000)
    }, []);

    return(
        <View style={{ backgroundColor: '#FFC700', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Logo /> 
            <Text style={{ fontSize: 32, color: '#000', marginTop: 32, fontFamily: 'poppins-medium' }}>Food Market</Text>

        </View>
    )
};

export default SplashScreen;