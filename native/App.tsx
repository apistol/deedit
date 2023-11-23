import 'react-native-gesture-handler'
import React from 'react'
import { Counter } from './src/features/counter/Counter'
import Router from './src/navigation/Router'
// LogBox.ignoreLogs(['Remote debugger'])
// const isHermes = () => !!global.HermesInternal
const App = () => {
  return <Router />
}

export default App
