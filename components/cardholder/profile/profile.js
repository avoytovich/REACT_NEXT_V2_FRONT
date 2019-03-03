import React, { Component } from 'react';
import { Button } from 'antd';

import { cardholder } from '../../../constants/texts';

import './profile.sass';

export default class Profile extends Component {
  handleEditProfileInfo = () => {
    //  console.log('Edit Info');
  };

  render() {
    return (
      <div className="profile-subunion">
        <div className="profile-heading">
          <p className="title">{cardholder.profile.title}</p>
          <Button
            type="default"
            shape="circle"
            onClick={this.handleEditProfileInfo}
            className="edit-button">
            <img
              className="edit-icon"
              src="../../static/create.svg"
              alt="edit button"
            />
          </Button>
        </div>
        <div
          className="photo"
          style={{
            backgroundImage: `url(../../static/profile.svg)`,
          }}
        />
        <p className="signature">{cardholder.profile.signature}</p>
        <div className="profile-info">
          <img
            className="email-icon"
            src="../../static/alternate_email.svg"
            alt="email icon"
          />
          <p className="email">{cardholder.profile.email}</p>
        </div>
        <div className="profile-info">
          <img
            className="phonelink_ring-icon"
            src="../../static/phonelink_ring.svg"
            alt="phonelink_ring icon"
          />
          <p className="phone">{cardholder.profile.phone}</p>
        </div>
        <hr />
        {cardholder.profile.addition.map((item, id) => (
          <div key={parseInt(id.toString(), 10)}>
            <hr
              className={
                item.title != 'Carta Client ID' ? 'special' : 'default'
              }
            />
            <div className="profile-info">
              <p className="profile-info-addition-title">{item.title}</p>
              <p className="profile-info-addition-value">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
