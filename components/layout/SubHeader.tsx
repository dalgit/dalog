import React from 'react'
import styled from 'styled-components'

const SubHeader = () => {
  return (
    <List>
      <li>Tech</li>
      <li>Proj</li>
      <li>Note</li>
    </List>
  )
}

export default SubHeader

const List = styled.ul`
  font-size: 30px;
  display: flex;
  font-weight: bold;

  li {
    margin-top: 30px;
    margin-right: 40px;
    margin-bottom: 70px;
  }
`
