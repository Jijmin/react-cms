import React from "react";
import { Card, Spin, Icon, Alert } from "antd";
import "./ui.less";

export default class Loadings extends React.Component {
  state = {};
  render() {
    const icon = <Icon type="loading" className="loading" />;
    const iconLoading = <Icon type="loading" className="loading" />
    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
          <Spin indicator={icon} spinning={true} />
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert
            message="将进酒"
            description="君不见，黄河之水天上来，奔流到海不复回。"
            type="info"
          />
          <Spin>
            <Alert
              message="将进酒"
              description="君不见，高堂明镜悲白发，朝如青丝暮成雪。"
              type="warning"
            />
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="将进酒"
              description="人生得意须尽欢，莫使金樽空对月。"
              type="warning"
            />
          </Spin>
          <Spin indicator={iconLoading}>
            <Alert
              message="将进酒"
              description="天生我才必有用，千金散尽还复来。"
              type="warning"
            />
          </Spin>
        </Card>
      </div>
    );
  }
}
