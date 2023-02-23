export const noop = () => {}

export const formatAddress = (key: string) => `${key.slice(0, 4)}...${key.slice(-4)}`

export const copyToClipboard = (text: string) => {
  const textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
}

export const capitalizeEachWord = (str: string) => {
  return str.replace(/\w\S*/g, function (txt: string) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}
export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const simplifyURL = ({ url }: { url: string }) => {
  return url.replace(/^https?:\/\//, '')
}
