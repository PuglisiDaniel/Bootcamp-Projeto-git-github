import React, {useState} from "react";
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from "react-native";

const App = () =>{

    const [numero, setNumero] = useState(0);

    function handleNumero(){
        const numeroAleatorio = Math.floor(Math.random()*100);
        setNumero(numeroAleatorio);

    }

    return (
    <SafeAreaView style = {style.container}>
        <Text style={style.numero}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero} style={style.botao}>
            <Text style={{color:'black', fontWeight: 'bold', fontSize: 22}}>Gerar Número</Text>
        </TouchableOpacity>
    </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    numero: {
        fontSize: 70,
        color: 'white',
        fontWeight: 'bold',
        
        
    },

    botao: {
        backgroundColor: 'white',
        width: '50%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 10,
        

    },
});

export default App;