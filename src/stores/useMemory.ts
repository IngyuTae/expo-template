import create from 'zustand'
import { immer } from './zustand'

export interface MemoryState {
  loading: boolean
  toggleLoading: () => void
}

const useMemory = create<MemoryState>(
  immer((set, get) => ({
    loading: true,
    toggleLoading: () =>
      set((draft) => {
        draft.loading = !draft.loading
      }),
  }))
)

export default useMemory
