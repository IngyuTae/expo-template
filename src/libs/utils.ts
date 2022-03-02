export function isExist<T>(value?: T | boolean | null): value is T {
  return Boolean(value)
}

export async function wait(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
