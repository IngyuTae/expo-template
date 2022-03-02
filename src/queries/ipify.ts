import { QueryFunctionContext } from 'react-query'
import { getIpify, IpifyData } from '../apis/ipify'

export const ipifyQueryKeys = {
  myip: (...options: Parameters<typeof getIpify>) =>
    [{ scope: 'myip', options }] as const,
}

export async function fetchIpify({
  queryKey: [{ options }],
}: QueryFunctionContext<
  ReturnType<typeof ipifyQueryKeys['myip']>
>): Promise<IpifyData> {
  const marketAll = await getIpify(...options)
  return marketAll
}
