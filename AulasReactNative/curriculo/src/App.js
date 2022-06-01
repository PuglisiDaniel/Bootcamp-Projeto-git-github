import React from 'react';
import {StyleSheet, View, Image, Text, Alert, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


import foto from './assets/profile.jpg';

import Card from './components/card';

const urlGithub = 'https://github.com/PuglisiDaniel';
const urlLinkedin = 'https://www.linkedin.com/in/daniel-p-27a951112/';
const urlFace = 'https://www.facebook.com/daniel.puglisi.1806';

const App = () =>{

  function handleRedeSocial(redeSocial){

    switch(redeSocial){

      case 'linkedin':
        Linking.openURL(urlLinkedin);
      break;

      case 'github':
        Linking.openURL(urlLinkedin);
      break;

      case 'facebook':
        Linking.openURL(urlFace);
      break;


    }

  }

  return (
    <>
      <View style = {style.page}>
        <View style={style.containerCabecalho}>
          <Image source={foto} style={style.foto}/>
          <Text style={style.nome}>Daniel Puglisi</Text>
          <Text style={style.funcao} >Estudante de desenvolvimento mobile</Text>

          <View style={style.redesSociais}>
            <TouchableOpacity onPress={()=>{handleRedeSocial('github')}}>
              <Icon name='github' size={30} color={'black'}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleRedeSocial('facebook')}}>
              <Icon name='facebook' size={30} color={'black'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleRedeSocial('linkedin')}}>
              <Icon name='linkedin' size={30} color={'black'}/>
            </TouchableOpacity>
           
          </View>
        </View>
        <Card titulo = "Formação Acadêmica">
            <Text style={style.cardContentText}>C&T - UNIFESP</Text>
            <Text style={style.cardContentText}>Ensino médio completo</Text>
            <Text style={style.cardContentText}>Curso informática</Text>
            <Text style={style.cardContentText}>Curso de inglês</Text>
        </Card>
        <Card titulo = "Experiências">
            <Text style={style.cardContentText}>Python</Text>
            <Text style={style.cardContentText}>C</Text>
            <Text style={style.cardContentText}>JavaScript</Text>
            <Text style={style.cardContentText}>PHP</Text>
            <Text style={style.cardContentText}>java</Text>
            <Text style={style.cardContentText}>Sql</Text>
        </Card>
   

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
    width: 200,
    height: 200,
    borderRadius: 125,
    borderColor: '#939393',
    borderWidth: 2,
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
   
    marginTop: 10,

  },

  cardContentText:{
    marginTop: 0,
    color: '#939393',
    textAlign: 'center',
  },


});

export default App;
