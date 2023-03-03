import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { readMarkdownFile, markdownToHtml, mdRemover } from './postUtils'
import { INote, INoteData } from '@/types/post'

const noteDirectory = path.join(process.cwd(), 'posts', 'note')
const noteFolders = fs.readdirSync(noteDirectory)

const getNoteList = (folderPath: string) => {
  const noteFiles = fs.readdirSync(folderPath)

  return noteFiles.map((noteFile) => {
    const notePath = path.join(folderPath, noteFile)

    const slug = mdRemover(noteFile)
    const title = getNoteTitle(notePath)

    return { slug, title }
  })
}

const getNoteTitle = (notePath: string) => {
  const note = fs.readFileSync(notePath)

  const {
    data: { title },
  } = matter(note)

  return title
}

export const getNoteCategories = () => {
  return noteFolders.map((folder) => {
    const folderPath = path.join(noteDirectory, folder)
    const noteList = getNoteList(folderPath)
    return { folder, noteList }
  })
}

export const getNoteSlugs = (): string[][] =>
  noteFolders.flatMap((folder) => {
    const notesPath = path.join(noteDirectory, folder)
    const notes = fs.readdirSync(notesPath)

    return notes.map((note) => [folder, mdRemover(note)])
  })

export const getNoteBySlug = async (slug: [string, string]): Promise<INote> => {
  const [folder, fileSlug] = slug
  const notePath = path.join(noteDirectory, folder, `${fileSlug}.md`)

  const { data, content } = await readMarkdownFile(notePath)
  const htmlContent = await markdownToHtml(content)

  return {
    postSlug: slug,
    content: htmlContent,
    ...(data as INoteData),
  }
}
