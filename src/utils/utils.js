import React from "react";
import { Select } from "antd";
const Option = Select.Option;
export default {
  /**
   * 格式化分页字段
   * @param {Object} data 分页参数
   * @param {Function} callback 回调函数
   */
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
  /**
   * 获取uuid
   */
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
  /**
   * list 转 option
   * @param {Array} data 数据
   */
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
  },
  /**
   * ETable 行点击通用函数
   * @param {*选中行的索引} selectedRowKeys
   * @param {*选中行对象} selectedItem
   */
  updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
    if (selectedIds) {
      this.setState({
        selectedRowKeys,
        selectedIds: selectedIds,
        selectedItem: selectedRows
      });
    } else {
      this.setState({
        selectedRowKeys,
        selectedItem: selectedRows
      });
    }
  }
};
