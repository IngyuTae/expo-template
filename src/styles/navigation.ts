import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native'
import palette from './palette'

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: palette.brand[500],
  },
}

const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: palette.brand[500],
  },
}

export { theme, darkTheme }
