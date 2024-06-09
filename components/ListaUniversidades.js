import ItemListaUni from './ItemListaUni';

import { FlatList, StyleSheet } from 'react-native';


export default function ListaUniversidades({ data, onItemPress, mode }) {
    return (
        <FlatList
            style={styles.ListaUniversidades}
            data={data}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
                <ItemListaUni 
                    university={item} 
                    onPress={onItemPress(item)} 
                    mode={mode} 
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    ListaUniversidades: {
        margin: 8,
        paddingHorizontal: 16,
        paddingTop: 16,
        overflow: 'scroll'
    }
})