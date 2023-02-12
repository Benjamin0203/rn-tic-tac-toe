import { View, Text, Button, ScrollView } from 'react-native'
import React, { ReactElement } from 'react'
import styles from './game.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorParams } from '../../config/navigator';

type GameProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams ,"Game">;
}

export default function Game({ navigation }: GameProps): ReactElement {
  return (
    <View 
    style={styles.container}
    >
      <Text>Game</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}