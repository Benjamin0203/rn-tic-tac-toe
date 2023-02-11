import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

// import Home from './screens/home/home';
// import Game from './screens/game/game';
import { Home, Game } from "./screens/index"; // Home and Game are exported from ./screens/index.tsx

export default function App() {

  return (
    <View style={styles.container}>
      <Home />
      <Game />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
