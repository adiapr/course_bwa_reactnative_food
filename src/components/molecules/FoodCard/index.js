import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
// import { Image } from 'react-native-svg'
import { FoodDummy1, IcStarOff, IcStarOn } from '../../../assets'

const FoodCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={{ width: '100%', height: 140, resizeMode: 'cover' }} />

      <View style={styles.content}>
        <Text style={styles.text}>Nasi Padang</Text>
        <View style={styles.ratingContainer}>
            <View style={styles.starContainer}>
                <IcStarOn />
                <IcStarOn />
                <IcStarOn />
                <IcStarOn />
                <IcStarOff />
            </View>
            <Text>4.5</Text>
        </View>
      </View>
    </View>
  )
}

export default FoodCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 7},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 14,
        width: 200,
        overflow: 'hidden',
        marginRight: 24,
    },
    text: {
        fontSize: 16,
        color: '#020202',
    },
    starContainer: {
        flexDirection:'row',
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content:{
        padding: 12
    }
})