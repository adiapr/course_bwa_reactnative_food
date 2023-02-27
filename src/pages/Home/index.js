import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'
// import { Image } from 'react-native-svg'
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, ProfileDummy } from '../../assets'
import { FoodCard, Gap } from '../../components'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'black', height: 3, width: 1, marginLeft: 5  }}
    style={{ backgroundColor: 'white' }}
    tabStyle={{ width: 'auto' }}
    renderLabel={({ route, focused, color }) => (
      <Text style={{ color: focused ? 'black' : '#8d92a3', margin: 8, fontWeight: focused ? 'bold' : 'normal' }}>
        {route.title}
      </Text>
    )}
  />
);

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: SecondRoute,
});

const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Menu Baru' },
    { key: 'second', title: 'Populer' },
    { key: 'third', title: 'Rekomendasi' },
  ]);

  return (
    <View style={styles.page}>
      {/* profile  */}
      <View style={styles.profileContainer}>
          <View>
            <Text style={styles.appNAme}>FoodMarket</Text>
            <Text style={styles.desc}>Yuk pesan apa yang kamu mau </Text>
          </View>
          <View>
            <Image source={ProfileDummy} styles={styles.profileImage} />
          </View>
      </View>

      {/* FoodCard  */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap lebar={24} />
            <FoodCard image={FoodDummy1} />
            <FoodCard image={FoodDummy2} />
            <FoodCard image={FoodDummy3} />
            <FoodCard image={FoodDummy4} />
          </View>
        </ScrollView>
      </View>

      {/* Swipeable tabs  */}
      {/* yarn add react-native-tab-view  */}
      {/* yarn add react-native-pager-view   */}
      <View style={styles.tabContainer}>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
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
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  page: {
    flex: 1,
    // backgroundColor: 'yellow'
  },
  tabContainer: {
    flex: 1
  }
})