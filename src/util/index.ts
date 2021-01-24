export function toBoolean(value: string | undefined): boolean {
  if (value === undefined) {
    return false
  }
  value = value.toLowerCase()
  return value === '1' || value === 'true' || value === 'yes'
}
