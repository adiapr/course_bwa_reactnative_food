import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Button, Gap, Header, TextInput } from "../../components";

const Signin = () => {
    return (
        <View style={styles.page}>
            <Header title="Sign In" subtitle="Find Your Best ever meal" />
            <View  style={styles.container}>
                <TextInput label="Alamat Email" placeholder="Masukkan email anda" />
                <Gap tinggi={16} />
                <TextInput label="Passowrd" placeholder="Masukkan dengan benar" />
                <Gap tinggi={24} />
                <Button text="Masuk" color="#FFc700"/>
                <Gap tinggi={12} />
                <Button text="Buat akun baru" color="#8d92a3" textColor="white" />
            </View>
        </View>
    );
}

export default Signin;

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
    }
});