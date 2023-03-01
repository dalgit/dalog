export const capitalizer = (name: string) => {
  return name.replace(/(^|-)([a-z])/g, (match: string) => match.toUpperCase())
}

export const mdRemover = (fileName: string) => fileName.replace(/\.md$/, '')
