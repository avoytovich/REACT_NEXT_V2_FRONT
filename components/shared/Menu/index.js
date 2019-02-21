import React, { PureComponent } from 'react';
import Link from 'next/link';

import { menu } from 'constants/headerMenu';
import i18n from 'services/decorators/i18n';
import DropDown from 'components/shared/DropDown';

import './style.sass';

/**
 * Menu component
 */
export default
@i18n('menu')
class MenuComponent extends PureComponent {
  static propsTypes = {};

  static defaultProps = {};

  get menuList() {
    const { translate } = this.props;
    return menu.map((el, index) => (
      <Link href={el.href} key={el.key || index}>
        {translate(el.name)}
      </Link>
    ));
  }

  render() {
    return (
      <div className="hyperjar-header">
        <div className="hyperjar-header_logo">
          <img src="/static/logo.svg" alt="HyperJar logo" />
        </div>
        <div className="hyperjar-header_menu">{this.menuList}</div>
        <DropDown text="searchBy" />
      </div>
    );
  }
}
