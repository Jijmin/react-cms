export const FORMLIST = [
  {
    type: "SELECT",
    label: "城市",
    field: "city",
    placeholder: "全部",
    initialValue: "1",
    width: 80,
    list: [
      { id: "0", name: "全部" },
      { id: "1", name: "北京" },
      { id: "2", name: "天津" },
      { id: "3", name: "上海" }
    ]
  },
  {
    type: "时间查询",
    field: "time"
  },
  {
    type: "SELECT",
    label: "订单状态",
    field: "order_status",
    placeholder: "全部",
    initialValue: "1",
    width: 80,
    list: [
      { id: "0", name: "全部" },
      { id: "1", name: "进行中" },
      { id: "2", name: "结束行程" }
    ]
  }
];
