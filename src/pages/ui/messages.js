import React from "react";
import { Card, Button, message } from "antd";
import "./ui.less";

export default class Messages extends React.Component {
  state = {};
  showMessage = type => {
    message[type]("白日依山尽，黄河入海流。欲穷千里目，更上一层楼");
  };
  render() {
    return (
      <div>
        <Card title="全局提示框" className="card-wrap">
          <Button type="primary" onClick={() => this.showMessage("success")}>
            Success
          </Button>
          <Button type="primary" onClick={() => this.showMessage("info")}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.showMessage("warning")}>
            Warning
          </Button>
          <Button type="primary" onClick={() => this.showMessage("error")}>
            Error
          </Button>
          <Button type="primary" onClick={() => this.showMessage("loading")}>
            Loading
          </Button>
        </Card>
      </div>
    );
  }
}
