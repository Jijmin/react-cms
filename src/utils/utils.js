import React from "react";
import { Select } from "antd";
const Option = Select.Option;
export default {
  pagination(data, callback) {
    return {
      onChange: current => {
        callback(current);
      },
      current: data.current,
      pageSize: data.pageSize,
      total: data.total,
      showTotal: () => {
        return `共${data.total}条`;
      },
      showQuickJumper: true
    };
  },
  generateUUID() {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now();
    }
    var uuid = "xxxxx".replace(/[xy]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  },
  getOptionList(data) {
    if (!data) {
      return [];
    }
    let options = []; //[<Option value="0" key="all_key">全部</Option>];
    data.map(item =>
      options.push(
        <Option value={item.id.toString()} key={item.id}>
          {item.name}
        </Option>
      )
    );
    return options;
  }
};
