import React from "react";
import { Card, Table, Modal, Button, message, Badge } from "antd";
import axios from "../../axios/index";
import { CLOS_DATA, CLOS_DATA2 } from "./config";
export default class HighTable extends React.Component {
  state = {};
  params = {
    page: 1
  };
  componentDidMount() {
    this.request();
  }

  // 动态获取mock数据
  request = async () => {
    const res = await axios.ajax("/table/high/list", {
      page: this.params.page
    });
    res.list.map((item, index) => (item.key = index));
    this.setState({
      dataSource: res.list
    });
  };

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortOrder: sorter.order
    });
  };

  // 删除操作
  handleDelete = item => {
    Modal.confirm({
      title: "确认",
      content: "您确认要删除此条数据吗？",
      onOk: () => {
        message.success("删除成功");
        this.request();
      }
    });
  };

  render() {
    const age_val = {
      title: "年龄",
      key: "age",
      dataIndex: "age",
      sorter: (a, b) => {
        return a.age - b.age;
      },
      sortOrder: this.state.sortOrder
    };
    const interest_val = {
      title: "爱好",
      dataIndex: "interest",
      render(abc) {
        let config = {
          "1": <Badge status="success" text="成功" />,
          "2": <Badge status="error" text="报错" />,
          "3": <Badge status="default" text="正常" />,
          "4": <Badge status="processing" text="进行中" />,
          "5": <Badge status="warning" text="警告" />
        };
        return config[abc];
      }
    };
    const opration_val = {
      title: "操作",
      render: (text, item) => {
        return (
          <Button
            size="small"
            onClick={item => {
              this.handleDelete(item);
            }}
          >
            删除
          </Button>
        );
      }
    };

    let columns = CLOS_DATA.concat();
    columns.splice(2, 0, age_val);

    const columns2 = CLOS_DATA2;
    const columns3 = columns.concat();

    let columns4 = columns.concat();
    columns4[5] = interest_val;
    columns4.push(opration_val);

    return (
      <div>
        <Card title="头部固定">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{ y: 240 }}
          />
        </Card>
        <Card title="左侧固定" style={{ margin: "10px 0" }}>
          <Table
            bordered
            columns={columns2}
            dataSource={this.state.dataSource}
            pagination={false}
            scroll={{ x: 2650 }}
          />
        </Card>
        <Card title="表格排序" style={{ margin: "10px 0" }}>
          <Table
            bordered
            columns={columns3}
            dataSource={this.state.dataSource}
            pagination={false}
            onChange={this.handleChange}
          />
        </Card>
        <Card title="操作按钮" style={{ margin: "10px 0" }}>
          <Table
            bordered
            columns={columns4}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
      </div>
    );
  }
}
