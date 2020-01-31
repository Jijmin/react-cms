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
    const { menuName, menuType } = this.props;
    return (
      <header className="header">
        <Row className="header-top">
          {menuType ? (
            <Col span={6} className="logo">
              <img src="/assets/logo-ant.svg" alt="" />
              <span>IMooc 通用管理系统</span>
            </Col>
          ) : (
            ""
          )}
          <Col span={menuType ? 18 : 24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="baidu.com">退出</a>
          </Col>
        </Row>
        {menuType ? (
          ""
        ) : (
          <Row className="breadcrumb">
            <Col span={4} className="breadcrumb-title">
              {menuName || "首页"}
            </Col>
            <Col span={20} className="date">
              <span className="date">{this.state.sysTime}</span>
            </Col>
          </Row>
        )}
      </header>
    );
  }
}
