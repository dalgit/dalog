export const getFirstPath = (path: string): string => {
  const firstPath = path.split('/')[1]
  const firstPathWithSlash = '/' + firstPath

  return firstPathWithSlash
}
