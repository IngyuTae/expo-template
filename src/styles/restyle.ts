import { createTheme } from '@shopify/restyle'
import {
  darkTheme as NavigationDarkTheme,
  theme as NavigationTheme,
} from './navigation'

export const theme = createTheme({
  colors: {
    ...NavigationTheme.colors,
    black: 'black',
    white: 'white',
    gray: 'gray',
    caption: 'gray',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    // https://github.com/hectahertz/react-native-typography
    defaults: { fontFamily: 'Spoqa-Regular', color: 'text' },
    largeTitle: { fontSize: 34, lineHeight: 41 },
    title1: { fontSize: 28, lineHeight: 34 },
    title2: { fontSize: 22, lineHeight: 28 },
    title3: { fontSize: 20, lineHeight: 25 },
    headline: { fontFamily: 'Spoqa-Medium', fontSize: 17, lineHeight: 22 },
    body: { fontSize: 17, lineHeight: 22 },
    callout: { fontSize: 16, lineHeight: 21 },
    subhead: { fontSize: 15, lineHeight: 20 },
    footnote: { fontSize: 13, lineHeight: 18 },
    caption1: { fontSize: 12, lineHeight: 16 },
    caption2: { fontSize: 11, lineHeight: 13 },
  },
  cardVariants: {
    primary: {
      backgroundColor: 'card',
      shadowOpacity: 0.3,
    },
    secondary: {
      backgroundColor: 'card',
      shadowOpacity: 0.1,
    },
  },
})

export type Theme = typeof theme

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    ...NavigationDarkTheme.colors,
  },
}
