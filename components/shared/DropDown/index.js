import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import PropTypes from 'prop-types';

import i18n from 'services/decorators/i18n';

/**
 * DropDown Hyperjar component
 * @reactProps {string} text - Text for DropDown
 * @reactProps {array} menuItems - Array of strings
 * @reactProps {func} translate - Method for translating
 */
export default
@i18n('menu')
class DropDown extends Component {
  static propsTypes = {
    text: PropTypes.string,
    menuItems: PropTypes.array,
    translate: PropTypes.func,
  };

  static defaultProps = {
    text: 'clickMe',
  };

  get menu() {
    return (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
  }

  get textWithIcon() {
    const { text, translate } = this.props;
    return (
      <div>
        {translate(text)}
        <Icon type="caret-down" theme="filled" color="white" />
      </div>
    );
  }

  render() {
    return (
      <Dropdown overlay={this.menu} trigger={['click']} className="">
        {this.textWithIcon}
      </Dropdown>
    );
  }
}
