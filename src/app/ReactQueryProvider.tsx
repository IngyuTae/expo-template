import { PropsWithChildren } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from 'react-query'

const queryClient = new QueryClient()

export default function ReactQueryProvider({
  children,
  client = queryClient,
  ...props
}: PropsWithChildren<Partial<QueryClientProviderProps>>) {
  return (
    <QueryClientProvider client={client} {...props}>
      {children}
    </QueryClientProvider>
  )
}
