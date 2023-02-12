import { View, Text } from 'react-native'
import React, { ReactElement,  ReactNode  } from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import styles from './gradient-background.styles';

type GradientBackgroundProps = {
  children: ReactNode;
}

export default function GradientBackground({children}: GradientBackgroundProps): ReactElement {
  return (
    <View
    style={{flex: 1}}
    >
      <StatusBar style="light" />
      <LinearGradient 
      style={styles.linearGradient}
      colors={['#22c1c3','#fdbb2d']}
      />
      {children}
       </View>
  )
}

