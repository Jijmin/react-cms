import React from "react";
import { Card, Tabs, message, Icon } from "antd";
import "./ui.less";

const TabPane = Tabs.TabPane;

export default class Bases extends React.Component {
  newTabIndex = 0;
  state = {};
  UNSAFE_componentWillMount() {
    const panes = [
      {
        title: "问刘十九",
        content: "绿蚁新醅酒，红泥小火炉。晚来天欲雪，能饮一杯无？",
        key: "问刘十九"
      },
      {
        title: "哥舒歌",
        content: "北斗七星高，哥舒夜带刀。至今窥牧马，不敢过临洮。",
        key: "哥舒歌"
      },
      {
        title: "怨情",
        content: "美人卷珠帘，深坐颦蛾眉。但见泪痕湿，不知心恨谁。",
        key: "怨情"
      }
    ];
    const newPanes = [
      {
        title: "乐游原 / 登乐游原",
        content: "向晚意不适，驱车登古原。夕阳无限好，只是近黄昏。",
        key: "乐游原 / 登乐游原"
      },
      {
        title: "听筝 / 鸣筝",
        content: "鸣筝金粟柱，素手玉房前。欲得周郎顾，时时误拂弦",
        key: "听筝 / 鸣筝"
      },
      {
        title: "渡汉江",
        content: "岭外音书断，经冬复历春。近乡情更怯，不敢问来人。",
        key: "渡汉江"
      }
    ];
    this.setState({
      activeKey: panes[0].key,
      panes,
      newPanes
    });
  }
  handleCallback = key => message.info("Hi,您选择了页签：" + key);
  onChange = activeKey => this.setState({ activeKey });
  onEdit = (targetKey, action) => this[action](targetKey);
  add = () => {
    const panes = this.state.panes;
    const newPanes = this.state.newPanes;
    let activeKey = `newTab${this.newTabIndex}`;
    let data = {
      title: activeKey,
      content: `New Tab Pane${this.newTabIndex}`,
      key: activeKey
    }
    if (this.newTabIndex < 3) {
      activeKey = newPanes[this.newTabIndex].key;
      panes.push({
        title: activeKey,
        content: newPanes[this.newTabIndex].content,
        key: activeKey
      });
    } else {
      panes.push(data);
    }
    this.newTabIndex++;
    this.setState({ panes, activeKey });
  };
  remove = targetKey => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  };
  render() {
    return (
      <div>
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab="新嫁娘词" key="新嫁娘词">
              三日入厨下，洗手作羹汤。
              <br />
              未谙姑食性，先遣小姑尝。
            </TabPane>
            <TabPane tab="相思" key="相思" disabled>
              红豆生南国，春来发几枝。
              <br />
              愿君多采撷，此物最相思。
            </TabPane>
            <TabPane tab="杂诗三首·其二" key="杂诗三首·其二">
              君自故乡来，应知故乡事。
              <br />
              来日绮窗前，寒梅著花未？
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图的页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane
              tab={
                <span>
                  <Icon type="plus" />
                  鹿柴
                </span>
              }
              key="鹿柴"
            >
              空山不见人，但闻人语响。
              <br />
              返景入深林，复照青苔上。
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="edit" />
                  竹里馆
                </span>
              }
              key="竹里馆"
            >
              独坐幽篁里，弹琴复长啸。
              <br />
              深林人不知，明月来相照。
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="delete" />
                  送别 / 山中送别
                </span>
              }
              key="送别 / 山中送别"
            >
              山中相送罢，日暮掩柴扉。
              <br />
              春草明年绿，王孙归不归？
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图的页签" className="card-wrap">
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {this.state.panes.map(panel => {
              return (
                <TabPane tab={panel.title} key={panel.key}>
                  {panel.content}
                </TabPane>
              );
            })}
          </Tabs>
        </Card>
      </div>
    );
  }
}
