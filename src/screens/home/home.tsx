import { View, Text } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import styles from './home.styles';
// import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
// import { useFonts, loadAsync } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

export default function Home() {

  // const [appIsReady, setAppIsReady] = useState(false);
  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       await loadAsync({ Ubuntu_700Bold, Ubuntu_400Regular } as any);
  //       // Artificially delay for two seconds to simulate a slow loading
  //       // experience. Please remove this if you copy and paste the code!
  //       await new Promise(resolve => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }


  // const [fontsLoaded] = useFonts({
  //   Ubuntu_400Regular,
  //   Ubuntu_700Bold,
  // });
  // if(!fontsLoaded) return (<View><Text>Loading...</Text></View>)

  return (
    <View style={styles.container} >
      {/* <Text
        style={{
          fontFamily: 'Ubuntu_700Bold',
          fontSize: 30,
        }}
      >
        Home
      </Text> */}
      <Text style={{ fontSize: 30 }}>Home</Text>
    </View>
  )
}