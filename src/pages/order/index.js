import React from "react";
import { Card, Button, Table, Form, Modal, message } from "antd";
import BaseForm from "../../components/baseForm";
import axios from "../../axios";
import Utils from "../../utils/utils";
import { FORMLIST } from "./config";
const FormItem = Form.Item;

export default class Order extends React.Component {
  state = {
    orderInfo: {},
    orderConfirmVisble: false
  };
  params = { page: 1 };
  formList = FORMLIST;
  componentDidMount() {
    this.requestList();
  }
  // 条件过滤
  handleFilter = params => {
    this.params = params;
    this.requestList();
  };
  requestList = async () => {
    let _this = this;
    const res = await axios.ajax("/order/list", this.params);
    let list = res.list.map((item, index) => {
      item.key = index;
      return item;
    });
    this.setState({
      list,
      pagination: Utils.pagination(res, current => {
        _this.params.page = current;
        _this.requestList();
      })
    });
  };
  // 订单结束确认
  handleConfirm = async () => {
    let item = this.state.selectedItem;
    if (!item) {
      return Modal.info({ title: "信息", content: "请选择一条订单进行结束" });
    }
    const res = await axios.ajax("/order/ebike_info", { orderId: item.id });
    this.setState({ orderInfo: res, orderConfirmVisble: true });
  };
  // 跳转订单详情
  openOrderDetail = () => {
    let item = this.state.selectedItem;
    if (!item) {
      return Modal.info({ title: "信息", content: "请先选择一条订单" });
    }
    window.open(`/#/common/order/detail/${item.id}`, "_blank");
  };
  // 结束订单
  handleFinishOrder = async () => {
    let item = this.state.selectedItem;
    await axios.ajax("/order/finish_order", { orderId: item.id });
    message.success("订单结束成功");
    this.setState({ orderConfirmVisble: false });
    this.requestList();
  };
  onRowClick = (record, index) => {
    let selectKey = [index];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    });
  };
  render() {
    const columns = [
      {
        title: "订单编号",
        dataIndex: "order_sn"
      },
      {
        title: "车辆编号",
        dataIndex: "bike_sn"
      },
      {
        title: "用户名",
        dataIndex: "user_name"
      },
      {
        title: "手机号",
        dataIndex: "mobile"
      },
      {
        title: "里程",
        dataIndex: "distance",
        render(distance) {
          return distance / 1000 + "Km";
        }
      },
      {
        title: "行驶时长",
        dataIndex: "total_time"
      },
      {
        title: "状态",
        dataIndex: "status"
      },
      {
        title: "开始时间",
        dataIndex: "start_time"
      },
      {
        title: "结束时间",
        dataIndex: "end_time"
      },
      {
        title: "订单金额",
        dataIndex: "total_fee"
      },
      {
        title: "实付金额",
        dataIndex: "user_pay"
      }
    ];
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    };
    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection = {
      type: "radio",
      selectedRowKeys
    };

    return (
      <div>
        <Card>
          <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Button type="primary" onClick={this.openOrderDetail}>
            订单详情
          </Button>
          <Button
            type="primary"
            style={{ marginLeft: 10 }}
            onClick={this.handleConfirm}
          >
            结束订单
          </Button>
        </Card>
        <div className="content-wrap">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => this.onRowClick(record, index)
              };
            }}
          ></Table>
        </div>
        <Modal
          title="结束订单"
          visible={this.state.orderConfirmVisble}
          onCancel={() => this.setState({ orderConfirmVisble: false })}
          onOk={this.handleFinishOrder}
          width={600}
        >
          <Form layout="horizontal">
            <FormItem label="车辆编号" {...formItemLayout}>
              {this.state.orderInfo.bike_sn}
            </FormItem>
            <FormItem label="剩余电量" {...formItemLayout}>
              {this.state.orderInfo.battery + "%"}
            </FormItem>
            <FormItem label="行程开始时间" {...formItemLayout}>
              {this.state.orderInfo.start_time}
            </FormItem>
            <FormItem label="当前位置" {...formItemLayout}>
              {this.state.orderInfo.location}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
