import { View, StyleSheet} from 'react-native';
import React from 'react';
import HomeHeader from '../component/home/HomeHeader';
import HomeTitle from '../component/home/HomeTitle';
import HomeMenu from '../component/home/HomeMenu';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader/>
      <HomeTitle/>
      <HomeMenu/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(241, 241, 241)',
  }
})

export default HomeScreen