import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text as NativeText } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react'


//import fonts
import { useFonts, loadAsync } from 'expo-font';
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { Spectral_700Bold_Italic, Spectral_400Regular } from '@expo-google-fonts/spectral';
// import splash screen (same as the deprecated <AppLoading />) 
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync(); 
//import components
import { Home, Game } from "./screens/index"; // Home and Game are exported from ./screens/index.tsx
import { Text } from "./components/index"; // Text is exported from ./components/index.tsx 
import Navigator from "./config/navigator";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await loadAsync({ Ubuntu_700Bold, Ubuntu_400Regular, Spectral_700Bold_Italic, Spectral_400Regular } as any);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
 
    <Navigator />


    // <View style={styles.container} onLayout={onLayoutRootView}>
    //   <Text 
    //   style={{fontSize: 40}} 
    //   onPress={() => alert(true)}
    //   weight="700"
    //   >Hello World
    //   </Text>
    //   <Navigator />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
  },
});
