import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
// import { Image } from 'react-native-svg'
import { ProfileDummy } from '../../assets'

const Home = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
          <View>
            <Text style={styles.appNAme}>FoodMarket</Text>
            <Text style={styles.desc}>Yuk pesan apa yang kamu suka </Text>
          </View>
          <View>
            <Image source={ProfileDummy} styles={styles.profileImage} />
          </View>
      </View>
      {/* <Text>Home</Text> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white'
  },
  appNAme: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#020202'
  },
  desc: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#8d92a3'
  }
})