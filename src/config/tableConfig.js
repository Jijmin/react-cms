export const INTEREST = {
  "1": "游泳",
  "2": "打篮球",
  "3": "踢足球",
  "4": "跑步",
  "5": "爬山",
  "6": "骑行",
  "7": "桌球",
  "8": "麦霸"
};
export const STATE = {
  "1": "咸鱼一条",
  "2": "风华浪子",
  "3": "北大才子",
  "4": "百度FE",
  "5": "创业者"
};
export const INIT_ROWS = [
  {
    id: "0",
    userName: "Jack",
    sex: "1",
    state: "1",
    interest: "1",
    birthday: "2000-01-01",
    address: "北京市海淀区奥林匹克公园",
    time: "09:00"
  },
  {
    id: "1",
    userName: "Tom",
    sex: "1",
    state: "2",
    interest: "2",
    birthday: "2000-01-01",
    address: "北京市海淀区奥林匹克公园",
    time: "09:00"
  },
  {
    id: "2",
    userName: "Lily",
    sex: "1",
    state: "3",
    interest: "3",
    birthday: "2000-01-01",
    address: "北京市海淀区奥林匹克公园",
    time: "09:00"
  }
];
export const CLOS_DATA = [
  {
    title: "id",
    key: "id",
    dataIndex: "id"
  },
  {
    title: "用户名",
    key: "userName",
    dataIndex: "userName"
  },
  {
    title: "性别",
    key: "sex",
    dataIndex: "sex",
    render(sex) {
      return sex === 1 ? "男" : "女";
    }
  },
  {
    title: "状态",
    key: "state",
    dataIndex: "state",
    render(state) {
      return STATE[state];
    }
  },
  {
    title: "爱好",
    key: "interest",
    dataIndex: "interest",
    render(interest) {
      return INTEREST[interest];
    }
  },
  {
    title: "生日",
    key: "birthday",
    dataIndex: "birthday"
  },
  {
    title: "地址",
    key: "address",
    dataIndex: "address"
  },
  {
    title: "早起时间",
    key: "time",
    dataIndex: "time"
  }
];