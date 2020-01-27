import React from 'react'
import { Row, Col } from 'antd'

import Home from './pages/home'
import { Header, Footer, Nav } from './components'

import './style/common.less'

export default class Admin extends React.Component {

  render() {
    return(
      <Row className="container">
        <Col span={4} className="nav-left"><Nav /></Col>
        <Col span={20} className="main">
          <Header />
          <Home />
          <Footer />
        </Col>
      </Row>
    )
  }
}