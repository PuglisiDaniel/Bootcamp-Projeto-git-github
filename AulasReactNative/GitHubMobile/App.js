import React from "react";
import 
{View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} 
from 'react-native';

const colorGit = '#010409';
const fontColorGit = '#C9D1D9';
const fontDarkColorGit = '#4F565E';
const imageProfile =  'https://avatars.githubusercontent.com/u/100011317?v=4';
const urlGithub = 'https://github.com/PuglisiDaniel';

const App = ()=>{

  const handlePressGithub= async (res) => {
    res = await Linking.canOpenURL(urlGithub);
    console.log('verificando link');
    if(res){  
      await Linking.openURL(urlGithub);
      console.log('link aprovado');
    }
  }

  return (
  <SafeAreaView style = {style.container}>
    <StatusBar backgroundColor={colorGit} barStyle='default'/>
    <View style={style.content} >
      <Image accessibilityLabel="imagem de perfil" source={{uri: imageProfile}} style={style.avatar}/>
      <Text accessibilityLabel="nome: Daniel Puglisi" style={[style.text, style.name]}>Daniel Puglisi</Text>
      <Text accessibilityLabel="nickname: Puglisi Daniel" 
      style = {[style.text, style.nickname]}>PuglisiDaniel</Text>
      <Text accessibilityLabel="Descrição: Estudante de ciência e tecnologia na UNIFESP- são josé dos campos" 
      style = {[style.text, style.description]}>Estudante de ciência e tecnologia na UNIFESP-SJC</Text>
    </View>

    <View style={[{flexDirection: 'row'}]}>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text> 
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>  
    </View>

    <View style={[{flexDirection: 'row'}]}>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text> 
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>  
    </View>

    <View style={[{flexDirection: 'row'}]}>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text> 
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>  
    </View>
    <View style={[{flexDirection: 'row'}]}>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text> 
      <Text style={style.yellowSquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>  
    </View>
    <View style={[{flexDirection: 'row'}]}>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text> 
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.whiteSquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.whiteSquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.whiteSquare}></Text>  
    </View>

    <View style={[{flexDirection: 'row'}]}>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text> 
      <Text style={style.yellowSquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>  
    </View>
    <View style={[{flexDirection: 'row'}]}>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text> 
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>  
    </View>

    <View style={[{flexDirection: 'row'}]}>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text> 
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.yellowSquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>  
    </View>

    <View style={[{flexDirection: 'row'}]}>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text> 
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>
      <Text style={style.graySquare}></Text>  
    </View>

    



    <View style={style.button}>
      <Pressable onPress={handlePressGithub}>
        <Text style={[style.text, style.textButton]}>Open in Github</Text>
      </Pressable>
    </View>
   
  </SafeAreaView>
  );
};


export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGit,
    flex: 1,//expandir tela
    justifyContent:'center',

  },

  content: {
    alignItems: "center",
    padding: 20,
  },

  text:{
    color: fontColorGit,

  },

  name:{
    marginTop: 15,
    fontSize: 25,
    fontWeight: "bold",
  },

  nickname:{
    fontSize: 18,
    color: fontDarkColorGit,
  },

  description: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
  },

  button: {
    
    marginTop: 20,
    
   
    alignItems:'center',
   
    
  },

  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: fontDarkColorGit,
    borderRadius:20,
    padding: 20
  },

  graySquare: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 5,
    position: 'relative',
    top: 10,
    left: 100,
    height: 10,
    width: 10,
    borderWidth: 1, 

  },

  yellowSquare: {
    backgroundColor: 'yellow',
    padding: 5,
    borderRadius: 5,
    position: 'relative',
    top: 10,
    left: 100,
    height: 10,
    width: 10,
    borderWidth: 1

  },

  whiteSquare: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    position: 'relative',
    top: 10,
    left: 100,
    height: 10,
    width: 10,
    borderWidth: 1

  },
 
});


