import { Columns, Rows } from '@mobily/stacks'
import { Button } from 'react-native'
import { Text } from '../components/ReStyle'
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
    <Rows space={4} padding={4}>
      <Text variant="largeTitle">Tab One</Text>
      <Text variant="headline">123,123,123</Text>
      <Text>Loading: {loading ? 1 : 0}</Text>
      <Text>Disclosure: {disclosure ? 1 : 0}</Text>
      <Columns space={4}>
        <Button title="Toggle Loading" onPress={toggleLoading} />
        <Button title="Toggle Disclosure" onPress={toggleDisclosure} />
      </Columns>
    </Rows>
  )
}
