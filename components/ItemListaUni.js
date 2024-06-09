import { StyleSheet, View, Button } from "react-native";

export default function ItemListaUni({ university, onPress}) {

    return <View style={styles.ItemListaUniContainer}>
        <Button title={university.name} style={{ text: styles.ItemListaUniText }} onPress={onPress} />
    </View>
}

const styles = StyleSheet.create({
    ItemListaUniContainer: {
        marginBottom: 20,
        padding: 10,
        borderColor: "#000",
        borderWidth: 5,
        borderRadius: 15,
    },
    ItemListaUniText: {
        fontSize: 20,
        maxWidth: "100%",
        textAlign: "center"
    }
});