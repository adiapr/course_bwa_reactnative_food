import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button({text, color, textColor='black'}) {
  return (
    <View style={styles.conatiner(color)}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner: (color) => ({
        backgroundColor: color,
        padding: 12,
        borderRadius: 8,  
    }),
    text: (color) => ({
        textAlign: 'center',
        fontSize: 14,
        color: color,
        fontFamily: 'Poppins-Medium'
    }),
})