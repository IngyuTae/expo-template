import { FontAwesome } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'Spoqa-Thin': require('../../assets/fonts/SpoqaHanSansNeo-Thin.ttf'),
          'Spoqa-Light': require('../../assets/fonts/SpoqaHanSansNeo-Light.ttf'),
          'Spoqa-Regular': require('../../assets/fonts/SpoqaHanSansNeo-Regular.ttf'),
          'Spoqa-Medium': require('../../assets/fonts/SpoqaHanSansNeo-Medium.ttf'),
          'Spoqa-Bold': require('../../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
