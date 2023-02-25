import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import { IcKembali } from '../../../assets'

const Header = ({title, subtitle, onBack}) => {
  return (
    <View style={styles.container}>
      {
        onBack && (
          <TouchableNativeFeedback>
            <View style={styles.kembali}>
              <IcKembali />
            </View>
          </TouchableNativeFeedback>
        )
      }
      
      <View>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.subtitle}>{subtitle}</Text> 
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title:{
        color: 'black',
        fontSize: 22,
        fontFamily: 'poppins-medium'
    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'poppins-light',
        color: '#8D92A3'
    },
    kembali: {
      // backgroundColor: 'yellow',
      padding: 16,
      marginRight: 0, 
      marginLeft: -16,
    }
})