import { View, Text } from 'react-native'
import React from 'react'
import styles from './home.styles';
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { useFonts } from 'expo-font';
export default function Home() {

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });
  if(!fontsLoaded) return (<View><Text>Loading...</Text></View>)

  return (
    <View style={styles.container}>
      <Text
      style={{
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 30,
      }}
      >
        Home
        </Text>
        <Text style={{fontSize: 30}}>Home</Text>
    </View>
  )
}