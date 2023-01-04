import { View, StyleSheet} from 'react-native';
import React from 'react'
import GessagemHeader from '../component/gessagem/GessagemHeader'
import GessagemTitle from '../component/gessagem/GessagemTitle'
import GessagemForm from '../component/gessagem/GessagemForm'


const GessagemScreen = () => {
  return (
    <View style={styles.container}>
        <GessagemHeader/>
        <GessagemTitle/>
        <GessagemForm/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(241, 241, 241)',
    }
  })

export default GessagemScreen