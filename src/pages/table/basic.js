import React from "react";
import { Card, Table, Modal, Button, message } from "antd";
import axios from "../../axios/index";
import Utils from "../../utils/utils";
import { INTEREST, INIT_ROWS, CLOS_DATA } from "../../config/tableConfig";

export default class Bases extends React.Component {
  state = {
    dataSource2: []
  };
  params = {
    page: 1
  };
  componentDidMount() {
    const data = INIT_ROWS;
    data.map((item, index) => (item.key = index));
    this.setState({ dataSource: data });

    this.request();
  }
  request = async () => {
    let _this = this;
    const res = await axios.ajax("/table/list", { page: this.params.page });
    res.list.map((item, index) => (item.key = index));
    this.setState({
      dataSource2: res.list,
      selectedRowKeys: [],
      selectedRows: null,
      pagination: Utils.pagination(res, current => {
        _this.params.page = current;
        this.request();
      })
    });
  };
  onRowClick = (record, index) => {
    let selectKey = [index];
    Modal.info({
      title: "信息",
      content: `用户名：${record.userName},用户爱好：${
        INTEREST[record.interest]
      }`
    });
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    });
  };

  // 多选执行删除动作
  handleDelete = () => {
    let rows = this.state.selectedRows;
    let ids = [];
    rows.map(item => ids.push(item.id));
    Modal.confirm({
      title: "删除提示",
      content: `您确定要删除这些数据吗？${ids.join(",")}`,
      onOk: () => {
        message.success("删除成功");
        this.request();
      }
    });
  };

  render() {
    const columns = CLOS_DATA;
    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection = {
      type: "radio",
      selectedRowKeys
    };
    const rowCheckSelection = {
      type: "checkbox",
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys,
          selectedRows
        });
      }
    };

    return (
      <div>
        <Card title="基础表格">
          <Table
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
        <Card title="动态数据渲染表格-Mock" style={{ margin: "10px 0" }}>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-单选" style={{ margin: "10px 0" }}>
          <Table
            bordered
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }
              };
            }}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-单选" style={{ margin: "10px 0" }}>
          <div style={{ marginBottom: 10 }}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            bordered
            rowSelection={rowCheckSelection}
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
        <Card title="Mock-表格分页" style={{ margin: "10px 0" }}>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={this.state.pagination}
          />
        </Card>
      </div>
    );
  }
}
