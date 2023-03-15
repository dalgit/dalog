import Link from 'next/link'
import styled from 'styled-components'
import { Topic } from '@/types/note'

interface NoteCategoryItemProps {
  topic: Topic
  categoryName: string
  getIsCurrentTopic: (slug: string) => boolean
  toggleSideBar: () => void
}

const NoteCategoryItem = ({
  topic,
  categoryName,
  getIsCurrentTopic,
  toggleSideBar,
}: NoteCategoryItemProps) => {
  const { slug, title } = topic
  const path = `/note/${categoryName}/${slug}`
  const isCurrentTopic = getIsCurrentTopic(path)

  return (
    <Item isCurrentTopic={isCurrentTopic} onClick={toggleSideBar}>
      <Link href={path}>{title}</Link>
    </Item>
  )
}

export default NoteCategoryItem

const Item = styled.li<{ isCurrentTopic: boolean }>`
  margin: 12px 0px 12px 24px;

  a {
    font-size: 13px;
    padding-left: 4px;
    color: ${({ isCurrentTopic, theme }) =>
      isCurrentTopic ? theme.colors._8782CD : theme.colors.gray};
  }
`
