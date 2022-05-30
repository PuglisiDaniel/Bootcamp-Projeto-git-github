
import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


import foto from './assets/profile.jpg'


const App = () =>{
  return (
    <>
      <View style = {style.page}>
        <View style={style.containerCabecalho}>
          <Image source={foto} style={style.foto}/>
          <Text style={style.nome}>Daniel Puglisi</Text>
          <Text style={style.funcao} >Estudante de desenvolvimento mobile</Text>

          <View style={style.redesSociais}>
            <Icon name='github' size={30} color={'black'}/>
            <Icon name='facebook' size={30} color={'black'} />
            <Icon name='linkedin' size={30} color={'black'}/>
           
          </View>
        </View>
   

      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,

  },

  containerCabecalho: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',

  },

  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },

  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    
  },

  funcao: {
    color: '#939393',
    fontSize: 15,
    marginBottom: 10,

  },

  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    backgroundColor: 'red',
    marginTop: 10,

  },
});

export default App;
