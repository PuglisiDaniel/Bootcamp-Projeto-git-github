import React from 'react';
import {StyleSheet, View, Image, Text, Alert, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


import foto from './assets/profile.jpg'

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
              <Icon name='github' size={30} color={'#939393'}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleRedeSocial('facebook')}}>
              <Icon name='facebook' size={30} color={'#939393'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{handleRedeSocial('linkedin')}}>
              <Icon name='linkedin' size={30} color={'#939393'}/>
            </TouchableOpacity>
           
          </View>
        </View>


        <View style={style.cardContainer}>
          <View style={style.card}>
            <View style = {style.cardHeder}>
              <Text style={{color:'black'}}>Experiências</Text>
              <View style = {style.cardContent}>
              <Text style={style.cardContentText}>Linguagem C</Text>
              <Text style={style.cardContentText}>Python</Text>
              <Text style={style.cardContentText}>JavaScript</Text>
              <Text style={style.cardContentText}>PHP</Text>

              </View>
            </View>
          </View>
        </View>
   
        <View style={style.cardContainer}>
          <View style={style.card}>
            <View style = {style.cardHeder}>
              <Text style={{color:'black'}}>Formação Acadêmica</Text>
              <View style = {style.cardContent}>
              <Text style={style.cardContentText}>Ensino Médio Completo</Text>
              <Text style={style.cardContentText}>Universidade federal de são paulo</Text>
              <Text style={style.cardContentText}>Curso de informática</Text>
              <Text style={style.cardContentText}>Curso de inglês</Text>

              </View>
            </View>
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
    width: 200,
    height: 200,
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
   
    marginTop: 10,

  },

  cardContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  card:{
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393', 
    alignItems:'center',
    backgroundColor: 'white',
    padding: 3, 


  },

  cardContent:{
    marginTop: 12,
  },

  cardContentText:{
    marginTop: 0,
    color: '#939393',
    
  },
});

export default App;
