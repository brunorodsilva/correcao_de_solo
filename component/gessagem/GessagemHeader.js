import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeHeader = () => {
  return (
    <View style={styles.containerHeader}>
      <Text 
        style={{fontSize: 25, color: '#fff', fontWeight: '700'}}>
            GESSAGEM
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: '#2d6035',
        width: '100%',
        height: 90,
        justifyContent: 'center',
        paddingHorizontal: '5%',
    }
})


export default HomeHeader