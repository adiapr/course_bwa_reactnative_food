import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../../components'

const SignUp = () => {
  return (
    <View style={styles.page}>
       <Header title="Daftar Akun" subtitle="Daftar dan makan sepuasnya"
            onBack={ ()=> {}} 
        />

        <View  style={styles.container}>
            {/* lingkaran foto  */}
            <View style={styles.containerPhoto}>
                <View style={styles.borderPhoto}>
                    <View style={styles.photoContainer}>
                        <Text style={styles.addPhoto}>
                            + Photo
                        </Text>
                    </View>
                </View>
            </View>

            <TextInput label="Nama Lengkap" placeholder="Masukkan nama lengkap" />
            <Gap tinggi={16} />

            <TextInput label="Alamat Email" placeholder="Masukkan email anda" />
            <Gap tinggi={16} />
            <TextInput label="Passowrd" placeholder="Masukkan dengan benar" />
            <Gap tinggi={24} />
            <Button text="Daftar Sekarang" color="#FFc700"/>
            {/* <Gap tinggi={12} />
            <Button text="Buat akun baru" color="#8d92a3" textColor="white" url={() => navigation.navigate('SignUp')} /> */}
        </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        color:'black',
        flex: 1,
    },
    addPhoto:{
    fontSize: 14,
    color: '#8d92a3'
    },
    photoContainer:  {
         width: 90,
         height: 90,
         borderRadius: 90,
         backgroundColor: '#f0f0f0',
         padding: 24,
         textAlign: 'center'
    },
    borderPhoto: {
        borderWidth: 1,
        borderColor: '#8d92a3',
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerPhoto: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16,
    }
})