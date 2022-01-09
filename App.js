import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import api from './src/services/api';

export default function App(){
  const [cep, setCep] = useState('');

  return(
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}> 
        <Text style={styles.text}>Digite o cep desejado</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 99222000'
          value={cep}
          onChangeText={(texto) => setCep(texto) }
          keyboardType='numeric'
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor: '#1d75cd' }]}>
          <Text style={styles.botaoText}>
            Buscar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, {backgroundColor: '#cd3e1d'}]}>
          <Text style={styles.botaoText}>
            Limpar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>
          CEP: 7900000
        </Text>
        <Text style={styles.itemText}>
          Logradouro: Rua 123
        </Text>
        <Text style={styles.itemText}>
          Bairro: Centro
        </Text>
        <Text style={styles.itemText}>
          Cidade: Rio de Janeiro
        </Text>
        <Text style={styles.itemText}>
          Estado: RJ
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  text:{
    marginTop: 25,
    marginBottom: 25,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input:{
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  areaBtn:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  botao:{
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoText:{
    fontSize: 20,
    color: '#FFF'
  },
  resultado:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemText:{
    fontSize: 22
  }
});