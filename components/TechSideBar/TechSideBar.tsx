import styled from 'styled-components'
import TechSearchBar from '../TechSearchBar/TechSearchBar'
import TechTagList from '../TechTagList/TechTagList'
import { ITags } from '@/types/tech'

interface TechSideBarProps {
  tags: ITags
}

const TechSideBar = ({ tags }: TechSideBarProps) => {
  return (
    <TechSideBarLayout>
      <TechSearchBar />
      <TechTagList tags={tags} />
    </TechSideBarLayout>
  )
}

export default TechSideBar

const TechSideBarLayout = styled.div`
  font-size: 14px;
  min-width: 150px;
  max-width: 150px;
  margin-left: 30px;

  @media ${({ theme }) => theme.device.tabletMax} {
    max-width: 100%;
    margin-left: 0;
  }
`
