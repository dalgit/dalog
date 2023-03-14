import Link from 'next/link'
import styled from 'styled-components'
import { Topic } from '@/types/note'

interface NoteCategoryItemProps {
  topic: Topic
  categoryName: string
  currentNote: string
}

const NoteCategoryItem = ({
  topic,
  categoryName,
  currentNote,
}: NoteCategoryItemProps) => {
  const { slug, title } = topic
  const notePath = `/note/${categoryName}/${slug}`
  const isCurrentNote = currentNote === slug

  return (
    <Item isCurrentNote={isCurrentNote} key={slug}>
      <Link href={notePath}>{title}</Link>
    </Item>
  )
}

export default NoteCategoryItem

const Item = styled.li<{ isCurrentNote: boolean }>`
  margin: 15px 0px 15px 30px;

  a {
    font-size: 16px;
    padding-left: 5px;
    color: ${({ isCurrentNote, theme }) =>
      isCurrentNote ? theme.colors.primary : 'black'};
  }
`
