import { View, Text, Button, ScrollView } from 'react-native'
import React, { useState, useEffect, useCallback, ReactElement } from 'react'
import styles from './home.styles';

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigatorParams } from "../../config/navigator";
import { GradientBackground } from '../../components';


type HomeProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">;
}

export default function Home({ navigation }: HomeProps): ReactElement {

  return (
    <GradientBackground>
    <ScrollView 
    contentContainerStyle={styles.container}
    >
      <Text style={{ fontSize: 30 }}>Home</Text>
      <Button title="Go to Game" onPress={() => navigation.navigate('Game', {gameId: "455"})} />
    </ScrollView>
    </GradientBackground>
   
  )
}

