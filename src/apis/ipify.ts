import { client } from '../libs/axios'

export type IpifyData = { ip: string }

export async function getIpify(
  format?: 'json' | 'jsonp',
  callback?: string
): Promise<IpifyData> {
  const response = await client.get<IpifyData>('https://api.ipify.org', {
    params: { format, callback },
  })
  return response.data
}
