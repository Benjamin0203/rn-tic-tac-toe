import { View, Text, Button } from 'react-native'
import React, { useState, useEffect, useCallback, ReactElement } from 'react'
import styles from './home.styles';

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigatorParams } from "../../config/navigator";

type HomeProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Home">;
}

export default function Home({ navigation }: HomeProps): ReactElement {

  return (
    <View style={styles.container} >
      <Text style={{ fontSize: 30 }}>Home</Text>
      <Button title="Go to Game" onPress={() => navigation.navigate('Game', {gameId: "455"})} />
    </View>
  )
}