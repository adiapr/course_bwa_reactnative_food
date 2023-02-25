import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ title }</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24,
        backgroundColor: '#fff'
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
    }
})