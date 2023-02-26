import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SuccessSignupIlustration } from '../../assets'
import { Button, Gap } from '../../components'

const SuccessSignUp = () => {
  return (
    <View style={styles.page}>
        <SuccessSignupIlustration />
        <Gap tinggi={30} />
        <Text style={styles.title}>Yeayy ! </Text>
        <Gap tinggi={6} />
        <Text style={styles.subtitle} >Pendaftaran Berhasil</Text>
        <Text style={styles.subtitle}>Silahkan memilih menu yang anda inginkan</Text>
        <Gap tinggi={30} />
        <View style={styles.buttonContainer}>
            <Button text="Temukan Makanan" color="#FFc700" url={() => navigation.navigate('SignUpAddress')} />
        </View>
    </View>
  )
}

export default SuccessSignUp

const styles = StyleSheet.create({
    page: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 14,
        color: '#8d92a3',
    },
    buttonContainer: {
        // backgroundColor: 'green',
        width: '100%',
        paddingHorizontal: 80,
    }
})