import React from "react";
import { Card, Button, Icon, Radio, Menu, Dropdown, Row, Col } from "antd";
import "./ui.less";

const ButtonGroup = Button.Group;
const menu = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

export default class Buttons extends React.Component {
  state = {
    size: "large"
  };
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };
  render() {
    const { size } = this.state;
    return (
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button disabled>Disabled</Button>
          <Button type="link">Link</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
          <Button type="primary" shape="circle" icon="plus" />
          <Button type="danger" shape="circle">
            Hot
          </Button>
          <Button type="primary" shape="round" icon="search">
            Search
          </Button>
          <Button type="danger" shape="round" icon="delete">
            Delete
          </Button>
          <Button type="dashed" icon="edit">
            Edit
          </Button>
          <Button icon="exclamation-circle">Info</Button>
          <Button type="link" icon="more">
            More
          </Button>
          <Button type="primary" loading>
            Loading
          </Button>
        </Card>
        <Card title="按钮大小" className="card-wrap">
          <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <br />
          <br />
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button size={size}>Normal</Button>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
          <Button type="danger" size={size}>
            Danger
          </Button>
          <Button type="link" size={size}>
            Link
          </Button>
          <br />
        </Card>
        <Row>
          <Col span={12}>
            <Card title="按钮组合" className="card-wrap">
              <ButtonGroup>
                <Button type="primary" style={{ marginRight: "0px" }}>
                  <Icon type="left" />
                  Go back
                </Button>
                <Button type="primary">
                  Go forward
                  <Icon type="right" />
                </Button>
              </ButtonGroup>
              <Dropdown overlay={menu}>
                <Button>
                  Actions <Icon type="down" />
                </Button>
              </Dropdown>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Block按钮">
              <Button type="primary" block>
                Primary
              </Button>
            </Card>
          </Col>
        </Row>
        <Card title="幽灵按钮" className="card-wrap grey-bg">
          <Button type="primary" ghost>
            Primary
          </Button>
          <Button ghost>Default</Button>
          <Button type="dashed" ghost>
            Dashed
          </Button>
          <Button type="danger" ghost>
            danger
          </Button>
          <Button type="link" ghost>
            link
          </Button>
        </Card>
      </div>
    );
  }
}
