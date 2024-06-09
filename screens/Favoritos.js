import { useEffect, useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import ListaUniversidades from '../components/ListaUniversidades';
import FavListContext from '../contexts/FavListContext';

export default function UnisFavoritadas() {
    let { listaFavoritos, setListaFavoritos } = useContext(FavListContext)


    function removerFavoritado(uni) {
        return function () {
            let aux = listaFavoritos

            aux.delete(uni)

            setListaFavoritos(aux)
        }
    }

    return <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <ListaUniversidades data={Array.from(listaFavoritos.values())} itemIdKey={"name"} onItemPress={removerFavoritado} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        width: '100%',
    },
});
