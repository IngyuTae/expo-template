import { useState } from 'react'
import { AppStateStatus, Platform } from 'react-native'
import { focusManager } from 'react-query'
import useAppState from './useAppState'
import { useOnlineManager } from './useOnlineManager'

export default function usePrefetchData() {
  const [loaded, setLoaded] = useState(true) // Change this

  useOnlineManager()
  useAppState(onAppStateChange)

  return loaded
}

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') focusManager.setFocused(status === 'active')
}
