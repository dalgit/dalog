import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { mdRemover } from './common'
import { readMarkdownFile, markdownToHtml } from './postUtils'

const noteBaseDirectory = path.join(process.cwd(), 'posts', 'note')
const noteFolders = fs.readdirSync(noteBaseDirectory)

const getNotesInFolder = (folderName: string) => {
  const folderDirectory = path.join(noteBaseDirectory, folderName)
  const notes = fs.readdirSync(folderDirectory)
  const datas = notes.map((note) => {
    const slug = mdRemover(note)
    return mappingSlugAndTitle(folderName, slug)
  })
  return { name: folderName, value: datas }
}

export const mappingSlugAndTitle = (folderName: string, slug: string) => {
  const noteDirectory = path.join(noteBaseDirectory, folderName, `${slug}.md`)
  const note = fs.readFileSync(noteDirectory)
  const {
    data: { title },
  } = matter(note)

  return { slug, title }
}

export const getNoteCategories = () => noteFolders.map(getNotesInFolder)

export const getAllNoteSlugs = () =>
  noteFolders.flatMap((noteFolder) => {
    const notesDirectory = path.join(noteBaseDirectory, noteFolder)
    const noteFileNames = fs.readdirSync(notesDirectory)
    return noteFileNames.map((noteFileName) => [
      noteFolder,
      mdRemover(noteFileName),
    ])
  })

export const getNoteBySlug = async (slug: string[]) => {
  const [folderName, fileSlug] = slug

  const fileUrl = path.join(noteBaseDirectory, folderName, `${fileSlug}.md`)

  const { data, content } = readMarkdownFile(fileUrl)
  const convertedContent = await markdownToHtml(content)

  return {
    postSlug: slug,
    ...data,
    content: convertedContent,
  }
}
