import React from "react";
import moment from "moment";
import { Row, Col } from "antd";

import "./index.less";

export default class Header extends React.Component {
  state = {};
  UNSAFE_componentWillMount() {
    this.setState({
      userName: "萤火虫"
    });
    setInterval(
      () =>
        this.setState({
          sysTime: moment().format("YYYY-MM-DD hh:mm:ss")
        }),
      1000
    );
  }
  render() {
    return (
      <header className="header">
        <Row className="header-top">
          <Col>
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="date">
            {this.state.sysTime}
          </Col>
        </Row>
      </header>
    );
  }
}
