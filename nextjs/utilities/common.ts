export const getImageBasePath = (url: string) => {
  if (process.env.NODE_ENV === 'development') return `${'http://localhost:1337'}${url}`
  if (process.env.NODE_ENV === 'production') return `${'http://localhost:1337'}${url}`
  return url
}
