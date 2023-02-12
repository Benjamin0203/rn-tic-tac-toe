/**
 * NOT NEEDED (FOR NOW)
 * source: https://www.udemy.com/course/react-native-tic-tac-toe/learn/lecture/22966258#questions/17110126
 */

/**
import { View, Text } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'

import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { Spectral_700Bold_Italic, Spectral_400Regular } from '@expo-google-fonts/spectral';

import { useFonts, loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();


export default function AppBootstrap() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await loadAsync({ Ubuntu_700Bold, Ubuntu_400Regular, Spectral_700Bold_Italic, Spectral_400Regular } as any);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
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
    <View>
      <Text>app-bootstrap</Text>
    </View>
  )
}
*/