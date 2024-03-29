import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ITags } from '@/types/tech'

interface SideBarProps {
  tags: ITags
}

const TechTagList = ({ tags }: SideBarProps) => {
  const tagNames = Object.keys(tags)
  const router = useRouter()

  return (
    <TechTagListLayout>
      <BoxTitle>TAG</BoxTitle>
      <List>
        {tagNames.map((tagName) => {
          const tagCount = tags[tagName]
          const isCurrentTag = router.asPath === `/tech/tag/${tagName}`

          return (
            <Item key={tagName} isCurrentTag={isCurrentTag}>
              <Link href={`/tech/tag/${tagName}`}>
                {tagName} ({tagCount})
              </Link>
            </Item>
          )
        })}
      </List>
    </TechTagListLayout>
  )
}

export default TechTagList

const TechTagListLayout = styled.div`
  @media ${({ theme }) => theme.device.tabletMax} {
    display: flex;
    align-items: center;
    font-size: 14px;

    white-space: nowrap;
    overflow-x: scroll;
    margin-bottom: 48px;

    ::-webkit-scrollbar {
      height: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors._878ECD};
      border-radius: 2px;
    }
    ::-webkit-scrollbar-track {
      background: none;
    }
  }
`

const BoxTitle = styled.div`
  font-weight: bold;
  margin-bottom: 18px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors._878ECD};
`

const List = styled.ul`
  @media ${({ theme }) => theme.device.tabletMax} {
    display: flex;
    width: 100%;
  }
`

const Item = styled.li<{ isCurrentTag: boolean }>`
  margin-bottom: 16px;
  margin-left: 8px;
  font-weight: 300;
  width: fit-content;
  border-radius: 10px;
  padding: 5px;
  background-color: ${({ isCurrentTag, theme }) =>
    isCurrentTag ? theme.colors._B1B2FF : theme.colors.lightGray};

  a {
    font-size: 14px;
    color: ${({ isCurrentTag }) => (isCurrentTag ? 'white' : 'gray;')};
  }
`
