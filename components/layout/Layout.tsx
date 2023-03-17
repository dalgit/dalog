import { ReactNode } from 'react'
import styled from 'styled-components'
import BlogNavigation from './BlogNavigation'
import Footer from './Footer'
import Header from './Header'
import Loader from '../Loader/Loader'
interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <BaseLayout>
      <Header />
      <ContentWrapper>
        <BlogNavigation />
        <Loader>{children}</Loader>
      </ContentWrapper>
      <Footer />
    </BaseLayout>
  )
}

export default Layout

const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100%;
`

const ContentWrapper = styled.div`
  padding: 0 10px 50px 10px;
  margin-top: ${({ theme }) => theme.pageBaseSize.headerHeight};
  min-height: ${({ theme }) =>
    `calc(100vh - ${theme.pageBaseSize.headerHeight} - ${theme.pageBaseSize.footerHeight})`};
  width: 880px;
  max-width: 100%;
`
