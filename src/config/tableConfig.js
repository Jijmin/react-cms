import Utils from "../utils/utils";
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
export const ID_VAL = {
  title: "id",
  key: "id",
  width: 100,
  fixed: "left",
  dataIndex: "id"
};
export const USERNAME_VAL = {
  title: "用户名",
  key: "userName",
  width: 100,
  fixed: "left",
  dataIndex: "userName"
};
export const SEX_VAL = {
  title: "性别",
  key: "sex",
  width: 100,
  dataIndex: "sex",
  render(sex) {
    return sex === 1 ? "男" : "女";
  }
};
export const STATE_VAL = {
  title: "状态",
  key: "state",
  width: 100,
  dataIndex: "state",
  render(state) {
    return STATE[state];
  }
};
export const INTEREST_VAL = {
  title: "爱好",
  key: "interest",
  width: 140,
  dataIndex: "interest",
  render(abc) {
    return INTEREST[abc];
  }
};
export const BIRTH_VAL = {
  title: "生日",
  key: "birthday",
  width: 140,
  dataIndex: "birthday"
};
export const ADDR_VAL = {
  title: "地址",
  key: "address",
  width: 200,
  dataIndex: "address"
};
export const TIME_VAL = {
  title: "早起时间",
  key: "time",
  width: 140,
  dataIndex: "time"
};
export const CLOS_DATA = [
  ID_VAL,
  USERNAME_VAL,
  SEX_VAL,
  STATE_VAL,
  INTEREST_VAL,
  BIRTH_VAL,
  ADDR_VAL,
  TIME_VAL
];
const birthdayKey = () => {
  return {
    title: "生日",
    key: Utils.generateUUID(),
    width: 120,
    dataIndex: "birthday"
  }
};

export const CLOS_DATA2 = [
  Object.assign({ fixed: "left" }, ID_VAL),
  Object.assign({ fixed: "left" }, USERNAME_VAL),
  SEX_VAL,
  STATE_VAL,
  INTEREST_VAL,
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  birthdayKey(),
  Object.assign({ fixed: "right" }, ADDR_VAL),
  Object.assign({ fixed: "right" }, TIME_VAL)
];