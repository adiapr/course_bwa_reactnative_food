import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Select, TextInput } from '../../components'

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
       <Header title="Daftar Akun" subtitle="Daftar dan makan sepuasnya"
            onBack={ ()=> {fddfdf}} 
        />

        <View  style={styles.container}>
            
            <TextInput label="Phone Number" placeholder="Masukkan nomor telpon" />
            <Gap tinggi={16} />

            <TextInput label="Address" placeholder="Masukkan alamat anda" />
            <Gap tinggi={16} />
            <TextInput label="House Number" placeholder="Masukkan nomor rumah" />
            <Gap tinggi={16} />
            
            <Select label="Pilih Kota" />
            <Gap tinggi={24} />
            
            <Button text="Selesaiakn Pendaftaran" color="#FFc700" url={() => navigation.replace('SuccessSignUp')}/>
            {/* <Gap tinggi={12} />
            <Button text="Buat akun baru" color="#8d92a3" textColor="white" url={() => navigation.navigate('SignUp')} /> */}
        </View>
    </View>
  )
}

export default SignUpAddress

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
    
})