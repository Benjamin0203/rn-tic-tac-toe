import { Text as NativeText, TextProps as NativetextProps, View } from 'react-native'
import React, { ReactNode, ReactElement } from 'react'

type TextProps = {
  weight: "400" | "700";
  children: ReactNode;
} & NativetextProps;

const defaultProps = {
  weight: "700",
};

export default function Text({ children, style, weight, ...props }: TextProps): ReactElement {
  let fontFamily;
  if (weight === "400") {
    fontFamily = "Spectral_400Regular";
  }
  if (weight === "700") {
    fontFamily = "Spectral_700Bold_Italic";
  }
  return (
    <NativeText {...props} style={[{ fontFamily },style]}>{children}</NativeText>
  )
}

Text.defaultProps = defaultProps;