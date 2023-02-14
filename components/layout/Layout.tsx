import React from 'react'
import MainHeader from './MainHeader'
import { ReactNode } from 'react'
import Footer from './Footer'
import styled from 'styled-components'

type LayoutProps = { children: ReactNode }

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainHeader />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  margin-top: 63px;

  padding: 20px 430px;

  box-sizing: border-box;

  min-height: ${({ theme }) =>
    `calc(100vh - ${theme.layoutHeight.header} - ${theme.layoutHeight.footer})`};
`
