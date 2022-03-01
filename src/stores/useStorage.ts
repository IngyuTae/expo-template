import AsyncStorage from '@react-native-async-storage/async-storage'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from './zustand'

export interface StorageState {
  disclosure: boolean
  toggleDisclosure: () => void
}

const useStorage = create<StorageState>(
  persist(
    immer((set, get) => ({
      disclosure: false,
      toggleDisclosure: () =>
        set((draft) => {
          draft.disclosure = !draft.disclosure
        }),
    })),
    {
      name: 'storage', // name of item in the storage (must be unique)
      getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
    }
  )
)

export default useStorage
