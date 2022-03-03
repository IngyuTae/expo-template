import axios from 'axios'

export type IpifyData = { ip: string }

export async function getIpify(
  format?: 'json' | 'jsonp',
  callback?: string
): Promise<IpifyData> {
  const response = await axios.get<IpifyData>('https://api.ipify.org', {
    params: { format, callback },
  })
  return response.data
}
