import React from 'react'

import MenuConfig from '../../config/menuConfig'
import './index.less'

import { Menu, Icon } from 'antd'
const { SubMenu } = Menu

export default class Nav extends React.Component {
  rootSubmenuKeys = MenuConfig.map(item => {
    return item.key
  })
  state = {
    openKeys: ['/home'],
    menuTreeNode: null
  }
  UNSAFE_componentWillMount() {
    this.setState({
      menuTreeNode: this.renderMenu(MenuConfig)
    })
  }
  // 手风琴菜单
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={
            <span>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </span>
          } key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <span>
          {item.icon && <Icon type={item.icon} />}
          <span>{item.title}</span>
        </span>
      </Menu.Item>
    })
  }
  render() {
    return (
      <section>
        <div className="logo">
          <img src="/logo192.png" alt="" />
          <h1>果汁 CMS</h1>
        </div>
        <Menu
          mode="inline"
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          theme="dark"
        >
          {this.state.menuTreeNode}
        </Menu>
      </section>
    );
  }
}