import { ThemeProvider } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from '../hooks/useCachedResources'
import Navigation from '../navigation'
import { darkTheme, theme } from '../styles/restyle'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) return null

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
        <Navigation />
        <StatusBar />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
