export function formatAccountString(accountString: string) {
  if (accountString) {
    const startString = accountString.substring(0, 4);
    const endString = accountString.substring(accountString.length - 4);
    return startString + '...' + endString
  }
}