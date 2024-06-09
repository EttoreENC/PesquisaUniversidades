import { useContext, useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import ListaUniversidades from '../components/ListaUniversidades';
import axios from 'axios';
import FavListContext from '../contexts/FavListContext';

export default function PesquisarUniversidades({ navigation }) {
    let { listaFavoritos, setListaFavoritos } = useContext(FavListContext)
    let [universidades, setUniversidades] = useState([])

    let [nomeUniversidade, setNomeUniversidade] = useState("")
    let [paisUniversidade, setPaisUniversidade] = useState("")

    useEffect(() => {
        PesquisarUniversidades(null, null);
    }, []);

    function mudarTela() {
        navigation.navigate("Favoritos")
    }

    async function PesquisarUniversidades(name, country) {
        if (name === "" && country === "") {
            return
        }

        let queryParams = {}
        if (name !== "") {
            queryParams.name = name
        }

        if (country !== "") {
            queryParams.country = country
        }

        let site = 'http://universities.hipolabs.com/search'

        const response = await axios.get(site, { params: queryParams })

        setUniversidades(response.data)
    }

    function addfavorito(uni) {
        return () => {
            let aux = listaFavoritos

            aux.add(uni)

            setListaFavoritos(aux)
        }

    }

    return <View style={styles.container}>
        <View>
            <TextInput
                style={styles.filtro}
                value={nomeUniversidade}
                placeholder={"Nome da Universidade"}
                onChangeText={setNomeUniversidade} />
            <TextInput
                style={styles.filtro}
                value={paisUniversidade}
                placeholder={"País da Universidade"}
                onChangeText={setPaisUniversidade} />
        </View>
        <View style={styles.grupobotoes}>
            <Button
                style={styles.botoes}
                title='Pesquisar'
                onPress={async function () {
                    return PesquisarUniversidades(nomeUniversidade, paisUniversidade)
                }} />
            <Button
                style={styles.botoes}
                title='Favoritos'
                onPress={mudarTela} />
        </View>
        <View style={{ flex: 1 }}>
            <ListaUniversidades data={universidades} itemIdKey={'name'} onItemPress={addfavorito} mode={'name'} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    filtro: {
        marginBottom: 8,
        marginTop: 15,
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderColor: "#000",
        borderWidth: 2,
        width: "20rem",
        fontSize: 20,
        borderRadius: 15,
    },
    grupobotoes: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "95%",
        marginTop: 15,
    },
    botoes: {
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 10,
            backgroundColor: '#0d6efd',
        },
        text: {
            fontWeight: 'bold',
            color: "white",
            fontSize: 20
        }
    },
});