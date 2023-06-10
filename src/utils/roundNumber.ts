export const roundNumber = (num: number): number => {
  try {
    return (Math.round((num + Number.EPSILON) * 100) / 100)
  } catch (error) {
    return 0
  }
}