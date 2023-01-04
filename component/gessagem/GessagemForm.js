import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const GessagemForm = () => {
    const [textCa, onChangeTextCa] = useState("");
    const [textMg, onChangeTextMg] = useState("");
    const [textK, onChangeTextK] = useState("");
    const [textNa, onChangeTextNa] = useState("");
    const [textAl, onChangeTextAl] = useState("");
  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.inputForm}
            onChangeText={onChangeTextCa}
            value={textCa}
            placeholder="Forneça o valor cálcio"
            keyboardType="numeric"
            maxLength={20}
        />
        <TextInput 
            style={styles.inputForm}
            onChangeText={onChangeTextCa}
            value={textCa}
            placeholder="Forneça o valor do magnésio"
            keyboardType="numeric"
            maxLength={20}
        />
        <TextInput 
            style={styles.inputForm}
            onChangeText={onChangeTextCa}
            value={textCa}
            placeholder="Forneça o valor potássio"
            keyboardType="numeric"
            maxLength={20}
        />
        <TextInput 
            style={styles.inputForm}
            onChangeText={onChangeTextCa}
            value={textCa}
            placeholder="Forneça o valor sódio"
            keyboardType="numeric"
            maxLength={20}
        />
        <TextInput 
            style={styles.inputForm}
            onChangeText={onChangeTextCa}
            value={textCa}
            placeholder="Forneça o valor alumínio"
            keyboardType="numeric"
            maxLength={20}
        />
        <Text style={styles.textResult}>
            1,5 t/ha de gesso
        </Text>
        <TouchableOpacity style={styles.button}>
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>RESULTADO</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

container:{
    justifyContent: 'center',
    marginLeft: 23,
    marginRight: 23,
    marginTop: 15,
},

inputForm: {
    width: '75%',
    height: 55,
    backgroundColor: '#1A2E35',
    borderRadius: 8,
    backgroundColor: '#F7F8F9',
    borderWidth: 1.5,
    borderColor: '#E8ECF4',
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 18,
    color: '#8391A1',
  },

  textResult: {
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: '10%',
    color: '#2d6035',
  },

  button: {
    width: '100%',
    height: 58,
    backgroundColor: '#2d6035',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

})

export default GessagemForm