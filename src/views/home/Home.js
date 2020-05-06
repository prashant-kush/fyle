/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';

import styles from './home.module.css';

import Button from '../../components/button/Button';
import Tab from '../../components/tab/Tab';
import Switch from '../../components/switch/Switch';
import Card from '../../components/card/Card';
import Carousel from '../../components/carousel/Carousel';

import table from '../../images/table.png';
import suit from '../../images/suit.png';
import globe from '../../images/globe.png';

const Home = () => {
  const [activeTab, changeActiveTab] = useState(100);
  const [switchValue, ChangeSwitchValue] = useState(false);
  const [totalPrice, changeTotalPrice] = useState({
    lollipop: 0.5 * activeTab,
    iceCandy: activeTab,
  });
  const cardArray = [
    {
      image: `https://www.maybelline.com/~/media/mny/us/face-makeup/modules/pathing-switcher/face-category-pathing-switcher.jpg`,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: 'Raja Ram',
      designation: 'Tip World',
    },
    {
      image:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: 'Raja Ram',
      designation: 'Tip World',
    },
  ];
  useEffect(() => {
    const lollipopPrice = switchValue ? activeTab : activeTab * 0.5;
    const iceCandyPrice = switchValue ? 2 * activeTab : activeTab;
    changeTotalPrice({ lollipop: lollipopPrice, iceCandy: iceCandyPrice });
  }, [activeTab, switchValue]);
  const tabs = [
    {
      text: '25 Serving',
      quantity: 25,
    },
    {
      text: '50 Serving',
      quantity: 50,
    },
    {
      text: '100 Serving',
      quantity: 100,
    },
    {
      text: '200 Serving',
      quantity: 200,
    },
  ];
  return (
    <div className={styles.home_parent}>
      <div className={styles.hero_container}>
        <div className={styles.hero_left}>
          <h1 className={styles.hero_left_h1}>Looking for a lollipop alternative?</h1>
          <h2 className={styles.hero_left_h2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos; standard dummy text ever since the 1500s.
          </h2>
          <div className={styles.button_wrapper}>
            <Button text="Primary CTA" bg="#0099FF" color="white" border="#0099FF" width="45%" />
            <Button text="Secondary CTA" bg="white" color="#31373D" border="#0099FF" width="45%" />
          </div>
        </div>
        <div className={styles.hero_right}>
          <img src={globe} alt="photo" className={styles.globe} />
        </div>
      </div>
      <div className={styles.linear_gradient_parent}>
        <div className={styles.linear_gradient}>
          <h1 className={styles.linear_gradient_h1}>
            This is a heading in
            <br />
            two lines
          </h1>
        </div>
        <img src={table} alt="table" className={styles.table} />
      </div>
      <div className={styles.pricing_parent}>
        <h1 className={styles.pricing_h1}>Compare pricing today!</h1>
        <h3 className={styles.pricing_h3}>
          Lorem Ipsum is simply dummy text of the printing and
          <span style={{ color: '#1EA5FF' }}> typesetting.</span>
        </h3>
        <div className={styles.tab_container}>
          {tabs.map(tab => (
            <Tab
              active={activeTab === tab.quantity}
              text={tab.text}
              quantity={tab.quantity}
              changeTab={changeActiveTab}
            />
          ))}
        </div>
        <div className={styles.toggle_switch_container}>
          <h2 className={styles.toggle_h2_first}>
            Annual
            <br />
            <span className={styles.toggle_span}>50% off</span>
          </h2>
          <Switch toggleSwitch={ChangeSwitchValue} value={switchValue} />
          <h2 className={styles.toggle_h2}>Monthly</h2>
        </div>

        <div className={styles.card_container}>
          <Card
            heading="Lollipop"
            totalPrice={`$${totalPrice.lollipop}`}
            timespan="Per month"
            serving={`for ${activeTab} serving`}
          />
          <Card
            heading="Icecandy"
            totalPrice={`$${totalPrice.iceCandy}`}
            timespan="Per month"
            serving={`for ${activeTab} serving`}
          />
          <Card
            heading="Your savings with lollipop"
            totalPrice={`$${totalPrice.iceCandy - totalPrice.lollipop}`}
            serving="Per month"
            color="#0099FF"
          />
        </div>
      </div>
      <div className={styles.carousel_parent}>
        <h1 className={styles.carousel_h1}>Here’s what our customers have to say </h1>
        <Carousel cardArray={cardArray} />
      </div>
      <div className={styles.hero_container_2nd}>
        <div className={styles.hero_left_2nd}>
          <h1 className={styles.hero_left_h1_2nd}>Loved by users, recommended by experts</h1>
          <h2 className={styles.hero_left_h2_2nd}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos; standard dummy text ever since the 1500s.
          </h2>
          <div className={styles.button_wrapper} style={{ width: '100%' }}>
            <Button text="Primary CTA" bg="#0099FF" color="white" border="#0099FF" width="45%" />
          </div>
        </div>
        <div className={styles.hero_right_2nd}>
          <img src={suit} alt="image" className={styles.suit} />
        </div>
      </div>
    </div>
  );
};
export default Home;
