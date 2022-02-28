import React from 'react'
import Container from './layout/Container'
import Content from './layout/Content'
import SideBar from './layout/SideBar'
import Widgets from './layout/Widgets'

function App() {
  return (
    <Container>
      <SideBar />
      <Content />
      <Widgets />
    </Container>
  )
}

export default App