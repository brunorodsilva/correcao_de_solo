import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const HomeMenu = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.buttonText}>GESSAGEM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.buttonText}>CALAGEM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.buttonText}>NUTRICÃO DE PLANTAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.buttonText}>SAIR</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: '5%',
        marginVertical: '5%',
        justifyContent: 'space-between',
    },

    menuButton: {
        borderRadius: 10,
        backgroundColor: '#2d6035',
        width: '47%',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%',
    },

    buttonText: {
        fontWeight: '700',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    }
})

export default HomeMenu