import { useCallback, useState } from 'react'
import { wait } from '../libs/utils'

export default function useRefresh(fn: () => Promise<unknown>) {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    Promise.all([fn(), wait(500)]).then(() => setRefreshing(false))
  }, [fn])

  return [refreshing, onRefresh] as const
}
