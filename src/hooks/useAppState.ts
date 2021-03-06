import { useEffect } from 'react'
import { AppState, AppStateStatus } from 'react-native'

export default function useAppState(onChange: (state: AppStateStatus) => void) {
  useEffect(() => {
    AppState.addEventListener('change', onChange)
    return () => {
      AppState.removeEventListener('change', onChange)
    }
  }, [onChange])
}
