import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { Modalize } from 'react-native-modalize';

const Home = ({ navigation }) => {

    const modalizeRef = useRef(null);
    const openModalize = () => {
        modalizeRef.current?.open();
    };

    const [userData, setUserData] = useState([]);
    const getData = async () => {
        try {
            const response = await AsyncStorage.getItem('userData')
            setUserData(JSON.parse(response));
        }
        catch (error) {
            console.error(error);
        }        
    }

    const handleLogout = () => {
        //AsyncStorage.clear();
        AsyncStorage.removeItem('userData');
        //AsyncStorage.multiRemove(['userData', 'userData2']);
        navigation.popToTop();
    }

    useEffect(() => {
        getData();
    }, []);

  return (
    <View>
        <TouchableOpacity
            style={{marginTop: 12, marginRight: 12, textAlign: 'right'}}
            onPress={() => navigation.popToTop()}
            ><Text>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{marginTop: 12, marginRight: 12, textAlign: 'right'}}
            onPress={handleLogout}
            ><Text>Sair</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20}}> Bem vindo {userData.name}!</Text>
        <Text style={{fontSize: 26, textAlign: 'center', fontWeight: 'bold', margin: 18}}>Netflix Series</Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity 
                style={{padding: 8}}
                onPress={openModalize}
            ><Image
                source={require('../images/dark.jpg')}
                style={{width: 150, height: 130, padding: 8, borderRadius: 4}}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                    style={{padding: 8}}
                    onPress={() => {}}
            ><Image
                source={require('../images/la_casa_de_papel.jpg')}
                style={{width: 150, height: 130, padding: 8, borderRadius: 4}}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                    style={{padding: 8}}
                    onPress={() => {}}
            ><Image
                source={require('../images/round_6.jpg')}
                style={{width: 150, height: 130, padding: 8, borderRadius: 4}}
                />
            </TouchableOpacity>
        </View>
        <Modalize
            ref={modalizeRef}
            snapPoint={180}
            modalHeight={400}
        >
            <View style={{flex: 1, height: 180, justifyContent: 'space-around', alignItems: 'center', margin: 20}}>
                <Text>Dark é uma premiada websérie alemã de drama, suspense e ficção científica, criada por Baran bo Odar e Jantje Friese e eleita em votação popular no site Rotten Tomatoes como a melhor série original Netflix.</Text>
                <Text>A série se passa na cidade fictícia de Winden, na Alemanha, que sofre o impacto do desaparecimento de uma criança, que expõe os segredos e as conexões ocultas entre quatro famílias locais, enquanto elas lentamente desvendam uma sinistra conspiração de viagem no tempo que abrange várias gerações.</Text>
                <Text>Ao longo da série, Dark explora as implicações existenciais do tempo e seus efeitos sobre a natureza humana.</Text>
                <Text>É a primeira série original alemã da Netflix, tendo estreado sua primeira temporada completa no dia 1º de dezembro de 2017.</Text>
                <Text>Após as críticas positivas, a série foi renovada para uma segunda temporada que foi lançada no dia 21 de junho de 2019. No trailer de lançamento da segunda temporada, a série foi anunciada como "uma história contada em três 'ciclos'" - cujo final ocorreu na sua terceira e última temporada, que foi lançada no dia 27 de junho de 2020.</Text>
                <Text>Apesar de ser inicialmente comparada a Stranger Things - ambas partem do desaparecimento de uma criança - a série ganhou fama pela sua trama complexa e temas envolvendo viagens no tempo e conceitos de física. </Text>
                <Text>No âmbito de uma votação realizada pelo site Rotten Tomatoes, Dark foi eleita como a melhor série da Netflix, vencendo a própria Stranger Things e enfrentando a também aclamada Black Mirror na final.Dark também ganhou o prémio Grimme-Preis, o mais importante da televisão alemã.</Text>
            </View>
        </Modalize>
    </View>
  );
}
export default Home;