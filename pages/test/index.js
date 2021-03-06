import React, { Component } from 'react';
import Link from 'next/link';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { testWithIdUrl, indexUrl } from 'services/URLService';
import i18n from 'services/decorators/i18n';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default
@i18n()
class App extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">
              <Link href={indexUrl()}>nav 1</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href={testWithIdUrl()}>nav 2</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href={testWithIdUrl(4)}>nav 3</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    subnav 1
                  </span>
                }>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    subnav 2
                  </span>
                }>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    subnav 3
                  </span>
                }>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}>
              test
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
