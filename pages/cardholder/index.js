import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';

// import { Link } from '../../routes';
import { Profile, Card, Jar } from '../../components/cardholder';
import MenuComponent from '../../components/shared/Menu';

import './cardholder.sass';

export default class CardHolder extends Component {
  render() {
    return (
      <Fragment>
        <div className="cardholder-wrapper">
          <Row>
            <Col span={24}>
              <MenuComponent />
            </Col>
          </Row>
          <Row>
            <Col span={5} className="profile-union">
              <Profile />
            </Col>
            <Col span={19} className="card-jar-transaction-union">
              <Row>
                <Col span={8} className="card-union">
                  <Card />
                </Col>
                <Col span={16} className="jar-union">
                  <Jar />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}
