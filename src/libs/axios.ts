import axios, { AxiosInstance } from 'axios'
import axiosRetry from 'axios-retry'

export function createAxiosClient(
  baseURL?: string,
  retries = 3,
  retryDelay = axiosRetry.exponentialDelay
): AxiosInstance {
  const client = axios.create({ baseURL })
  axiosRetry(client, { retries, retryDelay })
  return client
}

export const client = createAxiosClient()
