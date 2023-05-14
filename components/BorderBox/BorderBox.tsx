import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

interface BorderBoxprops {
  children: ReactNode
  title: string
}

const BorderBox = ({ children, title }: BorderBoxprops): ReactElement => {
  return (
    <BorderBoxLayout>
      <BorderBoxTitle>{title}</BorderBoxTitle>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </BorderBoxLayout>
  )
}

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const BorderBoxLayout = styled.div`
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #dddddd;
  position: relative;
  margin: 20px 0;
`

const BorderBoxTitle = styled.span`
  position: absolute;
  top: 0;
  left: 10%;
  padding: 5px;
  background-color: white;
  transform: translateY(-55%);
  color: gray;
`

export default BorderBox
