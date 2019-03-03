import React, { Component } from 'react';
import { Row, Col } from 'antd';

import i18n from '../../../services/decorators/i18n';
import DropDown from '../../shared/DropDown';
import { cardholder } from '../../../constants/texts';

import './card.sass';

export default
@i18n()
class Card extends Component {
  render() {
    return (
      <div className="card-subunion">
        <div className="card-heading">
          <p className="title">{cardholder.card.title}</p>
        </div>
        <div className="card">
          <div className="card-info-addition">
            {cardholder.card.extra_addition.map((item, id) => (
              <p
                key={parseInt(id.toString(), 10)}
                className={
                  id == 1
                    ? 'card-info-addition-title-special'
                    : 'card-info-addition-title'
                }>
                {item.title}
              </p>
            ))}
          </div>
          <div className="card-info-addition-special">
            {cardholder.card.extra_addition.map((item, id) => (
              <p
                key={parseInt(id.toString(), 10)}
                className={
                  id == 0
                    ? 'card-info-addition-value-special'
                    : 'card-info-addition-value'
                }>
                {item.value}
              </p>
            ))}
          </div>
          {cardholder.card.addition.map((item, id) => (
            <div key={parseInt(id.toString(), 10)}>
              <hr
                className={item.title == 'Card Pan' ? 'default' : 'special'}
              />
              <div className="card-info">
                <p className="card-info-addition-title">{item.title}</p>
                <p className="card-info-addition-value">{item.value}</p>
              </div>
            </div>
          ))}
          <div className="card-info-inner" />
        </div>
        <Row>
          <Col offset={14} span={10}>
            <div className="select-other-cards">
              <DropDown text="otherCards" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
