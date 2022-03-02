import { Button, StyleSheet, Text, View } from 'react-native'
import { useQuery } from 'react-query'
import { fetchIpify, ipifyQueryKeys } from '../queries/ipify'

export default function TabTwoScreen() {
  const query = useQuery(ipifyQueryKeys.myip('json'), fetchIpify)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />
      <Text style={styles.title}>
        {query.isFetching ? 'Loading...' : JSON.stringify(query.data)}
      </Text>
      <View style={styles.separator} />
      <Button title="Refetch" onPress={() => query.refetch()} />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
