import PesquisarUniversidades from "./screens/Pesquisa";
import UnisFavoritadas from "./screens/Favoritos";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavListContext from "./contexts/FavListContext";
import { useState } from "react";

const Stack = createNativeStackNavigator()

export default function App() {
  let [listaFavoritos, setListaFavoritos] = useState(new Set());

  return <FavListContext.Provider value={{ listaFavoritos, setListaFavoritos }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Universidades" component={PesquisarUniversidades} />
        <Stack.Screen name="Favoritos" component={UnisFavoritadas} />
      </Stack.Navigator>
    </NavigationContainer>
  </FavListContext.Provider>
}
