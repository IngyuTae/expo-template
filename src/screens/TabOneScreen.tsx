import { Button, StyleSheet, Text, View } from 'react-native'
import { RootTabScreenProps } from '../navigation/types'
import useMemory from '../stores/useMemory'
import useStorage from '../stores/useStorage'

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const loading = useMemory((state) => state.loading)
  const toggleLoading = useMemory((state) => state.toggleLoading)
  const disclosure = useStorage((state) => state.disclosure)
  const toggleDisclosure = useStorage((state) => state.toggleDisclosure)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text style={styles.number}>123,123,123</Text>
      <View style={styles.separator} />
      <Text style={styles.title}>Loading: {loading ? 1 : 0}</Text>
      <Text style={styles.title}>Disclosure: {disclosure ? 1 : 0}</Text>
      <View style={styles.separator} />
      <Button title="Toggle Loading" onPress={toggleLoading} />
      <Button title="Toggle Disclosure" onPress={toggleDisclosure} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 20,
    fontFamily: 'Spoqa-Regular',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
