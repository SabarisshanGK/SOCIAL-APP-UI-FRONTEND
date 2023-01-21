import React from 'react';
import { menu } from '../DATAS/menu';
import '../components/LeftBar.scss';
import { shortcuts } from '../DATAS/shortcuts';
import img16 from '../images/img2.jpg';
import { others } from '../DATAS/others';
const LeftBar = () => {
  return (
    <div className="LeftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={img16} alt=""></img>
            <span>SABARISSHAN G K</span>
          </div>
          {menu.map((item) => {
            return (
              <div className="items">
                <img src={item.images} alt=""></img>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <hr></hr>
        <span>Your shortcuts</span>
        <div className="menu">
          {shortcuts.map((item) => {
            return (
              <div className="items">
                <img src={item.images} alt=""></img>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <hr />
        <span>Others</span>
        <div className="menu">
          {others.map((item) => {
            return (
              <div className="items">
                <img src={item.images} alt=""></img>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
