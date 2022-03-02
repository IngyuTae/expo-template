import React from 'react'
import App from './App'
import ReactQueryProvider from './ReactQueryProvider'

export default function AppContainer() {
  return (
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  )
}
