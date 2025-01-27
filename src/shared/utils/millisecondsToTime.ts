export const millisecondsToTime = (milliseconds: number): string => {
  const seconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)

  const remainingSeconds = seconds % 60
  const remainingMinutes = minutes % 60

  return `${padZero(hours)}:${padZero(remainingMinutes)}:${padZero(remainingSeconds)}`
}

const padZero = (value: number): string => (value < 10 ? '0' : '') + value
