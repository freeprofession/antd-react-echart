import { Layout, Menu, Dropdown, message } from 'antd';
import React from 'react';
import Routes from './route/router';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'antd/dist/antd.css'
import './App.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  DownOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;
const menu_list = [{title:'guest', child:[{title: '1menu'},{title: '2menu'}]}, {title:'admin', child:[{title: '3menu'},{title: '4menu'}]}, {title:'super', child:[{title: '5menu'},{title: '6menu'}]}];
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const menus = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

function Menus() {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
      {
        menu_list.map((item, index) => {
          return (
            <SubMenu key={index} icon={<MenuUnfoldOutlined />} title={item.title}>
              {
                item.child.map((childItem, childIndex) => {
                  return (
                    <Menu.Item key={childIndex + childItem.title} icon={<MenuFoldOutlined />}>
                      <Link to='/home' >
                        {childItem.title}
                      </Link>
                    </Menu.Item>
                  )
                })
              }
            </SubMenu>
          );
        })
      }
    </Menu>
  )
}

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menus />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
              <Menu mode="horizontal" className="site-layout-chose">
                <Menu.Item key="1"><BellOutlined /></Menu.Item>
                <Menu.Item key="2">
                  <Dropdown overlay={menus}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Hover me <DownOutlined />
                    </a>
                  </Dropdown>
                </Menu.Item>
              </Menu>
            </Header>
            <Content className="site-layout-content">
              <Routes />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design Demo ©2021 Created by Ant user</Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);

export default App;
