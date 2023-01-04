import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja bem vindo, escolha uma opção</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '3%',
        marginVertical: '5%',
    },

    title:{
        fontSize: 30,
        color: '#2d6035',
        fontWeight: '700',
    }
})

export default HomeTitle